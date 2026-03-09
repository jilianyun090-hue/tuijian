<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const shareId = 'uP64pEjWUtGCCMS3'
const baseUrl = 'https://cloud.umami.is/api/share'

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
    // Fetch summary stats
    const statsRes = await fetch(`${baseUrl}/${shareId}/stats?startAt=${startAt}&endAt=${endAt}`)
    if (!statsRes.ok) throw new Error('Stats fetch failed')
    stats.value = await statsRes.ok ? await statsRes.json() : null

    // Fetch pageviews for chart
    const pvRes = await fetch(`${baseUrl}/${shareId}/pageviews?startAt=${startAt}&endAt=${endAt}&unit=${unit}&timezone=Asia/Shanghai`)
    if (!pvRes.ok) throw new Error('Pageviews fetch failed')
    const pvData = await pvRes.json()
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
  const { pageviews, visitors, bounces, totaltime } = stats.value
  
  const calcTrend = (obj) => {
    if (!obj || !obj.prev) return 0
    return Math.round(((obj.value - obj.prev) / obj.prev) * 100)
  }

  const formatTime = (seconds) => {
    if (!seconds) return '0s'
    if (seconds < 60) return `${Math.floor(seconds)}s`
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  return [
    { label: '浏览量 (PV)', value: pageviews?.value || 0, trend: calcTrend(pageviews) },
    { label: '访客数 (UV)', value: visitors?.value || 0, trend: calcTrend(visitors) },
    { label: '跳出率', value: `${bounces?.value || 0}%`, trend: calcTrend(bounces) },
    { label: '平均访问时长', value: formatTime(totaltime?.value / 1000), trend: calcTrend(totaltime) }
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

    <div v-if="loading" class="state-msg">数据加载中...</div>
    <div v-else-if="error" class="state-msg error">仪表盘加载失败 (CORS 或网络问题)</div>
    <div v-else>
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
}
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
