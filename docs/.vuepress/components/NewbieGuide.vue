<template>
  <Teleport to="body">
    <Transition name="guide-fade">
      <div v-if="showGuide" class="newbie-guide-overlay" @click="closeGuide">
        <div class="newbie-guide-card" @click.stop>
          <button class="guide-close" @click="closeGuide" aria-label="关闭">×</button>

          <div class="guide-icon">🚀</div>
          <h3 class="guide-title">新手 5 分钟快速开始</h3>
          <p class="guide-desc">第一次接触科学上网？跟着这个流程走，5 分钟搞定</p>

          <div class="guide-steps">
            <div class="step-item">
              <span class="step-num">1</span>
              <div class="step-content">
                <strong>选择一个机场</strong>
                <p>推荐新手：<a href="/airport/jilianyun.html">极连云</a> 或 <a href="/airport/guangnianti.html">光年梯</a></p>
              </div>
            </div>

            <div class="step-item">
              <span class="step-num">2</span>
              <div class="step-content">
                <strong>注册并购买套餐</strong>
                <p>最低 8 元起，支持支付宝/微信</p>
              </div>
            </div>

            <div class="step-item">
              <span class="step-num">3</span>
              <div class="step-content">
                <strong>下载客户端</strong>
                <p><a href="/proxy/windows-setup.html">Windows</a> · <a href="/proxy/macos-setup.html">macOS</a> · <a href="/proxy/android-setup.html">Android</a> · <a href="/proxy/ios-setup.html">iOS</a></p>
              </div>
            </div>

            <div class="step-item">
              <span class="step-num">4</span>
              <div class="step-content">
                <strong>导入订阅链接</strong>
                <p>复制机场后台的订阅链接，粘贴到客户端</p>
              </div>
            </div>
          </div>

          <div class="guide-actions">
            <a href="/airport/" class="guide-btn primary" @click="closeGuide">开始选择机场</a>
            <a href="/faq/" class="guide-btn secondary" @click="closeGuide">查看常见问题</a>
          </div>

          <label class="guide-checkbox">
            <input type="checkbox" v-model="dontShowAgain" />
            <span>不再显示此引导</span>
          </label>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showGuide = ref(false);
const dontShowAgain = ref(false);

onMounted(() => {
  // 只在首页显示
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    const hasSeenGuide = localStorage.getItem('hasSeenNewbieGuide');
    if (!hasSeenGuide) {
      // 延迟 1.5 秒显示，避免影响首屏加载
      setTimeout(() => {
        showGuide.value = true;
      }, 1500);
    }

    // 监听浮动按钮的触发事件
    window.addEventListener('showNewbieGuide', () => {
      showGuide.value = true;
    });
  }
});

const closeGuide = () => {
  showGuide.value = false;
  if (dontShowAgain.value) {
    localStorage.setItem('hasSeenNewbieGuide', 'true');
  }
};
</script>

<style scoped>
.newbie-guide-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.newbie-guide-card {
  background: #fff;
  border-radius: 16px;
  max-width: 560px;
  width: 100%;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.guide-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f3f4f6;
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;
}

.guide-close:hover {
  background: #e5e7eb;
  color: #374151;
  transform: rotate(90deg);
}

.guide-icon {
  font-size: 48px;
  text-align: center;
  margin-bottom: 16px;
}

.guide-title {
  font-size: 24px;
  font-weight: 700;
  color: #1e2433;
  text-align: center;
  margin: 0 0 8px 0;
}

.guide-desc {
  font-size: 15px;
  color: #596580;
  text-align: center;
  margin: 0 0 28px 0;
}

.guide-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.step-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.step-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #1565c0, #1976d2);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

.step-content {
  flex: 1;
}

.step-content strong {
  display: block;
  font-size: 15px;
  color: #1e2433;
  margin-bottom: 4px;
}

.step-content p {
  font-size: 14px;
  color: #596580;
  margin: 0;
  line-height: 1.6;
}

.step-content a {
  color: #1565c0;
  text-decoration: none;
  font-weight: 500;
}

.step-content a:hover {
  color: #0d47a1;
  text-decoration: underline;
}

.guide-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.guide-btn {
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.guide-btn.primary {
  background: #1565c0;
  color: #fff;
  border: 2px solid #1565c0;
}

.guide-btn.primary:hover {
  background: #0d47a1;
  border-color: #0d47a1;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.3);
}

.guide-btn.secondary {
  background: #fff;
  color: #1565c0;
  border: 2px solid #1565c0;
}

.guide-btn.secondary:hover {
  background: rgba(21, 101, 192, 0.05);
}

.guide-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
  cursor: pointer;
  justify-content: center;
  user-select: none;
}

.guide-checkbox input[type="checkbox"] {
  cursor: pointer;
}

.guide-fade-enter-active,
.guide-fade-leave-active {
  transition: opacity 0.3s ease;
}

.guide-fade-enter-from,
.guide-fade-leave-to {
  opacity: 0;
}

/* 暗色模式适配 */
[data-theme="dark"] .newbie-guide-card {
  background: #1f2937;
  color: #f9fafb;
}

[data-theme="dark"] .guide-title {
  color: #f9fafb;
}

[data-theme="dark"] .guide-desc {
  color: #d1d5db;
}

[data-theme="dark"] .step-content strong {
  color: #f9fafb;
}

[data-theme="dark"] .step-content p {
  color: #d1d5db;
}

[data-theme="dark"] .guide-close {
  background: #374151;
  color: #d1d5db;
}

[data-theme="dark"] .guide-close:hover {
  background: #4b5563;
  color: #f9fafb;
}

[data-theme="dark"] .guide-btn.secondary {
  background: #1f2937;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .newbie-guide-card {
    padding: 24px;
    margin: 0 12px;
  }

  .guide-title {
    font-size: 20px;
  }

  .guide-actions {
    flex-direction: column;
  }

  .guide-btn {
    width: 100%;
  }
}
</style>
