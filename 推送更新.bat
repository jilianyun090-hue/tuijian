@echo off
chcp 65001 >nul
cd /d "%~dp0" || (
    echo.
    echo 错误: 无法切换到脚本目录
    pause
    exit /b 1
)

echo.
echo ===== 开始构建和推送 =====
echo.

echo 第一步: 构建网站（本地验证）...
call npm run build
if errorlevel 1 (
    echo.
    echo 错误: 构建失败！请先修复构建错误再推送。
    pause
    exit /b 1
)
echo 构建验证通过
echo.

echo 第二步: 检查文件变更并暂存...
git status --short
git add -A

rem 检查是否有已暂存的变更
set "HAS_STAGED="
for /f "usebackq delims=" %%i in (`git diff --staged --name-only`) do set "HAS_STAGED=1"
if not defined HAS_STAGED (
    echo 没有文件变更，无需推送。
    pause
    exit /b 0
)
echo.

rem 支持通过命令行参数传入提交信息，否则自动生成时间戳
if "%~1"=="" (
    for /f "tokens=1-3 delims=/: " %%a in ('echo %date% %time%') do set DATETIME=%date% %time%
    set "COMMIT_MSG=更新: 内容更新 %DATETIME%"
) else (
    set "COMMIT_MSG=%~1"
)

echo 第三步: 提交更改...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo 错误: 提交失败！
    echo 可能原因: 没有变更、未配置 git user.name/user.email、或 pre-commit 钩子阻止
    echo 建议: 检查 git status 和 git config --get user.name
    git status
    pause
    exit /b 1
)
echo 提交完成
echo.

rem 获取当前分支（如果失败则默认 main）
set "BRANCH="
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
if "%BRANCH%"=="" set "BRANCH=main"

echo 第四步: 同步远端并进行 rebase 合并（分支: %BRANCH%）...
git fetch origin
git pull --rebase origin %BRANCH%
if errorlevel 1 (
    echo.
    echo 错误: 拉取远端变化失败！请解决冲突后重试。
    pause
    exit /b 1
)

echo 第五步: 推送到远端分支 %BRANCH%...
git push origin %BRANCH%
if errorlevel 1 (
    echo.
    echo 错误: 推送失败！请检查网络连接或 Git 权限配置。
    pause
    exit /b 1
)
echo 推送完成
echo.

echo ===== 所有操作完成 =====
echo 源码已推送到 GitHub，Cloudflare Pages 将自动触发构建。
echo 请前往控制台确认构建状态: https://dash.cloudflare.com/
echo.
pause
exit /b 0
