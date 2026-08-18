<template>
  <div v-if="showButton" class="newbie-float-button" @click="openGuide">
    <span class="float-icon">📘</span>
    <span class="float-text">新手引导</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showButton = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 只在首页显示
    const isHomePage = window.location.pathname === '/';
    // 检查用户是否已标记"不再显示"
    const hasSeenGuide = localStorage.getItem('hasSeenNewbieGuide');

    // 即使看过引导，按钮依然显示（方便随时查看）
    if (isHomePage) {
      showButton.value = true;
    }
  }
});

const openGuide = () => {
  // 触发显示引导的自定义事件（由 NewbieGuide.vue 监听）
  if (typeof window !== 'undefined') {
    localStorage.removeItem('hasSeenNewbieGuide_temp');
    window.dispatchEvent(new CustomEvent('showNewbieGuide'));
  }
};
</script>

<style scoped>
.newbie-float-button {
  position: fixed;
  bottom: 100px;
  right: 24px;
  background: linear-gradient(135deg, #1565c0, #1976d2);
  color: #fff;
  padding: 12px 20px;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(21, 101, 192, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1000;
  user-select: none;
}

.newbie-float-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(21, 101, 192, 0.5);
  background: linear-gradient(135deg, #0d47a1, #1565c0);
}

.newbie-float-button:active {
  transform: translateY(-1px);
}

.float-icon {
  font-size: 18px;
  line-height: 1;
}

.float-text {
  line-height: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .newbie-float-button {
    bottom: 80px;
    right: 16px;
    padding: 10px 16px;
    font-size: 13px;
  }

  .float-icon {
    font-size: 16px;
  }
}

/* 暗色模式 */
[data-theme="dark"] .newbie-float-button {
  background: linear-gradient(135deg, #42a5f5, #64b5f6);
  box-shadow: 0 4px 16px rgba(66, 165, 245, 0.4);
}

[data-theme="dark"] .newbie-float-button:hover {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  box-shadow: 0 8px 24px rgba(66, 165, 245, 0.5);
}
</style>
