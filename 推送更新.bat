@echo off
cd /d "d:\桌面文件\clashjichang"

git add -A
git commit -m "fix: SEO title dedup, Umami tracking script & data parsing, description improvements"
git push

echo.
echo Push done.
pause
