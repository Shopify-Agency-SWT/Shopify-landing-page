@echo off
title Shopify Agency site (keep this window open)
cd /d "%~dp0"
echo Starting the Shopify Agency website...
echo Keep this window open while you use the site. Close it to stop the site.
start "" /b cmd /c "timeout /t 12 >nul && start http://localhost:3100"
npx next dev -p 3100
