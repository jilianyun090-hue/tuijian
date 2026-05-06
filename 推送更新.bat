@echo off
chcp 65001 >nul
cd /d "d:\桌面文件\clashjichang"

echo ===== 开始构建和推送 =====
echo.

echo 第一步: 构建网站...
call npm run build
if not errorlevel 0 (
    echo 错误: 构建失败！
    pause
    exit /b 1
)
echo ✓ 构建完成
echo.

echo 第二步: 提交更改...
git add -A
git commit -m "优化: VuePress 博客优化 - SEO 增强 ^& Umami 统计改进"
echo.

echo 第三步: 推送到 GitHub...
git push origin main
if not errorlevel 0 (
    echo 错误: 推送失败，请检查网络连接或 Git 配置！
    pause
    exit /b 1
)
echo ✓ 推送完成
echo.

echo.
echo ===== 所有操作完成 =====
echo 网站已部署到 Cloudflare Pages
pause
