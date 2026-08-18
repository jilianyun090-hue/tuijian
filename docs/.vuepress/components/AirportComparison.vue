<template>
  <div class="airport-comparison-tool">
    <div class="tool-header">
      <h2 class="tool-title">✈️ 机场对比工具</h2>
      <p class="tool-desc">选择 2-3 个机场进行全方位对比，找到最适合你的那一个</p>
    </div>

    <!-- 机场选择器 -->
    <div class="airport-selector">
      <div
        v-for="(airport, index) in selectedAirports"
        :key="index"
        class="selector-slot"
      >
        <select
          v-model="selectedAirports[index]"
          class="airport-select"
          @change="onAirportChange"
        >
          <option value="">选择机场 {{ index + 1 }}</option>
          <option
            v-for="item in availableAirports"
            :key="item.id"
            :value="item.id"
            :disabled="selectedAirports.includes(item.id) && selectedAirports[index] !== item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <button
        v-if="selectedAirports.length < 3"
        @click="addSlot"
        class="add-slot-btn"
      >
        + 添加对比
      </button>
    </div>

    <!-- 对比表格 -->
    <div v-if="comparisonData.length > 0" class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="feature-col">对比项</th>
            <th v-for="item in comparisonData" :key="item.id" class="airport-col">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 月付价格 -->
          <tr>
            <td class="feature-name">💰 月付价格</td>
            <td v-for="item in comparisonData" :key="item.id" :class="getBestClass('price', item.price)">
              {{ item.price }}
            </td>
          </tr>

          <!-- 线路类型 -->
          <tr>
            <td class="feature-name">🛤️ 线路类型</td>
            <td v-for="item in comparisonData" :key="item.id" :class="getBestClass('line', item.line)">
              {{ item.line }}
            </td>
          </tr>

          <!-- 流量 -->
          <tr>
            <td class="feature-name">📊 月流量</td>
            <td v-for="item in comparisonData" :key="item.id">
              {{ item.traffic }}
            </td>
          </tr>

          <!-- 设备数 -->
          <tr>
            <td class="feature-name">📱 同时在线设备</td>
            <td v-for="item in comparisonData" :key="item.id">
              {{ item.devices }}
            </td>
          </tr>

          <!-- Netflix -->
          <tr>
            <td class="feature-name">🎬 Netflix 解锁</td>
            <td v-for="item in comparisonData" :key="item.id">
              <span :class="getCheckClass(item.netflix)">{{ item.netflix ? '✓' : '✗' }}</span>
            </td>
          </tr>

          <!-- ChatGPT -->
          <tr>
            <td class="feature-name">🤖 ChatGPT 支持</td>
            <td v-for="item in comparisonData" :key="item.id">
              <span :class="getCheckClass(item.chatgpt)">{{ item.chatgpt ? '✓' : '✗' }}</span>
            </td>
          </tr>

          <!-- 运营时长 -->
          <tr>
            <td class="feature-name">⏱️ 运营时长</td>
            <td v-for="item in comparisonData" :key="item.id" :class="getBestClass('years', item.years)">
              {{ item.years }}
            </td>
          </tr>

          <!-- 试用 -->
          <tr>
            <td class="feature-name">🎁 试用/退款</td>
            <td v-for="item in comparisonData" :key="item.id">
              {{ item.trial }}
            </td>
          </tr>

          <!-- 官网链接 -->
          <tr class="link-row">
            <td class="feature-name">🔗 官网</td>
            <td v-for="item in comparisonData" :key="item.id">
              <a :href="item.link" target="_blank" rel="noopener" class="visit-btn">
                访问官网
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">📋</div>
      <div class="empty-text">请至少选择 1 个机场开始对比</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedAirports = ref(['', '']);

// 机场数据库（精简示例，实际应从配置文件读取）
const availableAirports = [
  {
    id: 'jilianyun',
    name: '极连云',
    price: '8元/月起',
    line: 'IEPL 专线',
    traffic: '100GB',
    devices: '3台',
    netflix: true,
    chatgpt: true,
    years: '3年+',
    trial: '无',
    link: '/airport/jilianyun.html',
  },
  {
    id: 'guangnianti',
    name: '光年梯',
    price: '9元/月起',
    line: 'IPLC 专线',
    traffic: '100GB',
    devices: '无限制',
    netflix: true,
    chatgpt: true,
    years: '4年+',
    trial: '7天退款',
    link: '/airport/guangnianti.html',
  },
  {
    id: 'yuntu',
    name: '云兔',
    price: '15元/月起',
    line: 'IPLC 专线',
    traffic: '150GB',
    devices: '5台',
    netflix: true,
    chatgpt: true,
    years: '5年+',
    trial: '无',
    link: '/airport/yuntu.html',
  },
  {
    id: 'lingmao',
    name: '灵猫网络',
    price: '13元/月起',
    line: 'CN2 GIA',
    traffic: '100GB',
    devices: '5台',
    netflix: true,
    chatgpt: true,
    years: '2年+',
    trial: '无',
    link: '/airport/lingmao.html',
  },
  {
    id: 'xingdaomeng',
    name: '星岛梦',
    price: '8元/月起',
    line: 'CN2 GIA',
    traffic: '80GB',
    devices: '3台',
    netflix: true,
    chatgpt: false,
    years: '2年+',
    trial: '试用套餐',
    link: '/airport/xingdaomeng.html',
  },
];

const comparisonData = computed(() => {
  return selectedAirports.value
    .filter(id => id)
    .map(id => availableAirports.find(a => a.id === id))
    .filter(Boolean);
});

const onAirportChange = () => {
  // 自动触发对比
};

const addSlot = () => {
  if (selectedAirports.value.length < 3) {
    selectedAirports.value.push('');
  }
};

const getBestClass = (type, value) => {
  if (comparisonData.value.length < 2) return '';

  if (type === 'price') {
    const prices = comparisonData.value.map(a => parseInt(a.price));
    const minPrice = Math.min(...prices);
    return parseInt(value) === minPrice ? 'best-value' : '';
  }

  if (type === 'line') {
    return value.includes('IEPL') || value.includes('IPLC') ? 'best-value' : '';
  }

  if (type === 'years') {
    const years = comparisonData.value.map(a => parseInt(a.years));
    const maxYears = Math.max(...years);
    return parseInt(value) === maxYears ? 'best-value' : '';
  }

  return '';
};

const getCheckClass = (value) => {
  return value ? 'check-yes' : 'check-no';
};
</script>

<style scoped>
.airport-comparison-tool {
  margin: 0 0 48px 0;
  padding: 32px;
  background: linear-gradient(135deg, #FBF9F5 0%, #F7F4EF 100%);
  border-radius: 16px;
  border: 1px solid #E7E1D7;
}

.tool-header {
  text-align: center;
  margin-bottom: 32px;
}

.tool-title {
  font-size: 28px;
  font-weight: 700;
  color: #1F2421;
  margin: 0 0 8px 0;
}

.tool-desc {
  font-size: 15px;
  color: #5C635D;
  margin: 0;
}

/* 选择器 */
.airport-selector {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.selector-slot {
  flex: 1;
  min-width: 200px;
  max-width: 280px;
}

.airport-select {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 2px solid #E7E1D7;
  border-radius: 8px;
  background: #FFFFFF;
  color: #1F2421;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}

.airport-select:hover {
  border-color: #C4612F;
}

.airport-select:focus {
  border-color: #C4612F;
  box-shadow: 0 0 0 3px rgba(196, 97, 47, 0.1);
}

.add-slot-btn {
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #C4612F;
  background: #FFFFFF;
  border: 2px dashed #C4612F;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.add-slot-btn:hover {
  background: rgba(196, 97, 47, 0.05);
  border-style: solid;
}

/* 对比表格 */
.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
}

.comparison-table thead {
  background: linear-gradient(135deg, #C4612F, #A94E22);
  color: #fff;
}

.comparison-table th {
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}

.comparison-table .feature-col {
  width: 30%;
  min-width: 140px;
}

.comparison-table .airport-col {
  text-align: center;
}

.comparison-table tbody tr {
  border-bottom: 1px solid #E7E1D7;
  transition: background 0.2s;
}

.comparison-table tbody tr:hover {
  background: rgba(196, 97, 47, 0.02);
}

.comparison-table tbody tr:last-child {
  border-bottom: none;
}

.comparison-table td {
  padding: 14px 16px;
  font-size: 14px;
  text-align: center;
}

.feature-name {
  font-weight: 600;
  color: #1F2421;
  text-align: left !important;
  background: #FBF9F5;
}

.best-value {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  font-weight: 700;
  color: #065f46;
  position: relative;
}

.best-value::before {
  content: '⭐';
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 12px;
}

.check-yes {
  color: #10b981;
  font-size: 18px;
  font-weight: 700;
}

.check-no {
  color: #dc2626;
  font-size: 18px;
  font-weight: 700;
  opacity: 0.4;
}

.link-row {
  background: #FBF9F5;
}

.visit-btn {
  display: inline-block;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #C4612F;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.visit-btn:hover {
  background: #A94E22;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(196, 97, 47, 0.3);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #5C635D;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.6;
}

.empty-text {
  font-size: 16px;
  font-weight: 500;
}

/* 暗色模式 */
[data-theme="dark"] .airport-comparison-tool {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border-color: #374151;
}

[data-theme="dark"] .tool-title {
  color: #f9fafb;
}

[data-theme="dark"] .tool-desc {
  color: #d1d5db;
}

[data-theme="dark"] .airport-select {
  background: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}

[data-theme="dark"] .add-slot-btn {
  background: #1f2937;
  color: #42a5f5;
  border-color: #42a5f5;
}

[data-theme="dark"] .comparison-table-wrapper {
  background: #1f2937;
}

[data-theme="dark"] .comparison-table thead {
  background: linear-gradient(135deg, #42a5f5, #64b5f6);
}

[data-theme="dark"] .comparison-table tbody tr {
  border-bottom-color: #374151;
}

[data-theme="dark"] .feature-name {
  color: #f9fafb;
  background: #374151;
}

[data-theme="dark"] .link-row {
  background: #374151;
}

[data-theme="dark"] .comparison-table td {
  color: #d1d5db;
}

/* 移动端 */
@media (max-width: 768px) {
  .airport-comparison-tool {
    padding: 20px;
  }

  .tool-title {
    font-size: 22px;
  }

  .airport-selector {
    flex-direction: column;
  }

  .selector-slot {
    max-width: 100%;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 10px 8px;
    font-size: 13px;
  }

  .visit-btn {
    padding: 6px 14px;
    font-size: 13px;
  }
}
</style>
