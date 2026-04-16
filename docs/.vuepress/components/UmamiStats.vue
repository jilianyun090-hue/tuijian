<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const shareId = 'uP64pEjWUtGCCMS3'
// Use local Cloudflare Functions proxies to bypass CORS and handle tokens
const statsApi = '/api/stats'
const pageviewsApi = '/api/pageviews'

const period = ref('24h')
const loading = ref(true)
const error = ref(false)
const stats = ref(null)
const pageviews = ref([])

const periods = [
  { label: '24 小时', val: '24h', unit: 'hour' },
  { label: '7 天', val: '7d', unit: 'day' },
  { label: '30 天', val: '30d', unit: 'day' }
]

const getTimeRange = (p) => {
  const now = Date.now()
  let startAt = now
  if (p === '24h') startAt = now - 24 * 60 * 60 * 1000
  else if (p === '7d') startAt = now - 7 * 24 * 60 * 60 * 1000
  else if (p === '30d') startAt = now - 30 * 24 * 60 * 60 * 1000
  return { startAt, endAt: now }
}

const fetchData = async () => {
  loading.value = true
  error.value = false
  const { startAt, endAt } = getTimeRange(period.value)
  const unit = periods.find(it => it.val === period.value).unit

  try {
    // Parallel fetching to reduce wait time
    const [statsRes, pvRes] = await Promise.all([
      fetch(`${statsApi}?startAt=${startAt}&endAt=${endAt}`),
      fetch(`${pageviewsApi}?startAt=${startAt}&endAt=${endAt}&unit=${unit}`)
    ])

    if (!statsRes.ok || !pvRes.ok) throw new Error('API fetch failed')

    const [statsData, pvData] = await Promise.all([
      statsRes.json(),
      pvRes.json()
    ])

    stats.value = statsData
    pageviews.value = pvData.pageviews || []
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const setPeriod = (p) => {
  period.value = p
}

watch(period, fetchData)
onMounted(fetchData)

const summaryItems = computed(() => {
  if (!stats.value) return []
  const { pageviews, visitors, bounces, totaltime, comparison } = stats.value
  
  const calcTrend = (current, prev) => {
    if (!prev || prev === 0) return 0
    return Math.round(((current - prev) / prev) * 100)
  }

  const formatTime = (seconds) => {
    if (!seconds) return '0s'
    if (seconds < 60) return `${Math.floor(seconds)}s`
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  // Umami /stats returns flat numbers: { pageviews, visitors, bounces, totaltime, comparison:{...} }
  const pv  = pageviews  || 0
  const pvP = comparison?.pageviews  || 0
  const uv  = visitors   || 0
  const uvP = comparison?.visitors   || 0
  const bo  = bounces    || 0
  const boP = comparison?.bounces    || 0
  const tt  = totaltime  || 0
  const ttP = comparison?.totaltime  || 0

  return [
    { label: '浏览量 (PV)', value: pv, trend: calcTrend(pv, pvP) },
    { label: '访客数 (UV)', value: uv, trend: calcTrend(uv, uvP) },
    { label: '跳出率', value: `${bo}%`, trend: calcTrend(bo, boP) },
    { label: '平均访问时长', value: formatTime(tt / 1000), trend: calcTrend(tt, ttP) }
  ]
})

const chartPath = computed(() => {
  if (!pageviews.value.length) return ''
  const data = pageviews.value.map(d => d.y)
  const max = Math.max(...data, 10)
  const width = 800
  const height = 150
  const points = data.map((y, i) => {
    const x = (i / (data.length - 1)) * width
    const ry = height - (y / max) * height
    return `${x},${ry}`
  })
  
  if (points.length === 0) return ''
  return `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`
})

const startTimeLabel = computed(() => {
    if (!pageviews.value.length) return ''
    return new Date(pageviews.value[0].x).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric', hour: 'numeric' })
})

const endTimeLabel = computed(() => {
    if (!pageviews.value.length) return ''
    return new Date(pageviews.value[pageviews.value.length - 1].x).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric', hour: 'numeric' })
})
</script>

<template>
  <div class="umami-stats">
    <div class="tabs">
      <button v-for="t in periods" :key="t.val" :class="{ active: period === t.val }" @click="setPeriod(t.val)">
        {{ t.label }}
      </button>
    </div>

    <div v-if="loading" class="grid skeleton-grid">
      <div class="card skeleton" v-for="i in 4" :key="i">
        <div class="skeleton-text short"></div>
        <div class="skeleton-text large"></div>
        <div class="skeleton-text mini"></div>
      </div>
      <div class="chart card skeleton full-width">
        <div class="skeleton-text medium"></div>
        <div class="skeleton-rect"></div>
      </div>
    </div>
    <div v-else-if="error" class="state-msg error">仪表盘加载失败 (CORS 或网络问题)</div>
    <div v-else class="fade-in">
      <div class="grid">
        <div class="card" v-for="item in summaryItems" :key="item.label">
          <div class="card-label">{{ item.label }}</div>
          <div class="card-value">{{ item.value }}</div>
          <div :class="['card-trend', item.trend >= 0 ? 'up' : 'down']">
            {{ item.trend >= 0 ? '↑' : '↓' }} {{ Math.abs(item.trend) }}%
          </div>
        </div>
      </div>

      <div class="chart">
        <div class="chart-header">24小时趋势</div>
        <div class="svg-container">
          <svg width="100%" height="150" viewBox="0 0 800 150" preserveAspectRatio="none">
            <path :d="chartPath" fill="rgba(66, 184, 131, 0.1)" stroke="#42b883" stroke-width="2" />
          </svg>
        </div>
        <div class="chart-footer">
          <span>{{ startTimeLabel }}</span>
          <span>{{ endTimeLabel }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.umami-stats {
  margin: 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.tabs button {
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.tabs button.active {
  background: #42b883;
  color: #fff;
  border-color: #42b883;
}
.state-msg {
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 12px;
  color: #666;
}
.state-msg.error {
  color: #e53e3e;
  padding: 3rem;
  background: #fff5f5;
  border-radius: 12px;
  text-align: center;
}
.fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Skeleton Styles */
.skeleton {
  background: #fff;
  overflow: hidden;
  position: relative;
}
.skeleton::after {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.skeleton-text {
  background: #f0f0f0;
  height: 12px;
  margin: 10px auto;
  border-radius: 4px;
}
.skeleton-text.short { width: 40%; }
.skeleton-text.medium { width: 100%; height: 16px; margin-bottom: 20px; }
.skeleton-text.large { width: 70%; height: 24px; margin: 15px auto; }
.skeleton-text.mini { width: 30%; height: 10px; }
.skeleton-rect {
  background: #f0f0f0;
  width: 100%;
  height: 120px;
  border-radius: 8px;
}
.full-width { grid-column: 1 / -1; }
.skeleton-grid { gap: 1rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  text-align: center;
}
.card-label {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
}
.card-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}
.card-trend {
  font-size: 0.8rem;
  font-weight: 600;
}
.card-trend.up { color: #42b883; }
.card-trend.down { color: #e53e3e; }

.chart {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.chart-header {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}
.chart-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.5rem;
}
.svg-container {
  overflow: hidden;
}
</style>
