@echo off
REM ============================================
REM Atri AI Platform - Startup Script for Windows
REM ============================================

echo.
echo ██████╗ ███████╗████████╗ █████╗ ██████╗ 
echo ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
echo ██████╔╝█████╗     ██║   ███████║██████╔╝
echo ██╔══██╗██╔══╝     ██║   ██╔══██║██╔══██╗
echo ██████╔╝███████╗   ██║   ██║  ██║██║  ██║
echo ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
echo.
echo Asisten AI yang Mencintai Keindahan Laut
echo ==========================================
echo.

setlocal enabledelayedexpansion

REM Check for required tools
echo [*] Checking prerequisites...
where java >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] Java tidak ditemukan! Silakan install Java 17 atau lebih baru.
    pause
    exit /b 1
)

where mvn >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] Maven tidak ditemukan! Silakan install Maven.
    pause
    exit /b 1
)

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] Node.js/npm tidak ditemukan! Silakan install Node.js.
    pause
    exit /b 1
)

echo [OK] Semua tools ditemukan!
echo.

REM Get current directory
set CURRENT_DIR=%cd%

echo [*] Starting Atri AI Platform...
echo.
echo ================================
echo Setup Backend Spring Boot
echo ================================

cd /d "%CURRENT_DIR%\backend"
echo [*] Current directory: %cd%
echo [*] Building backend...
call mvn clean install -q

if %errorlevel% neq 0 (
    echo [X] Gagal build backend!
    pause
    exit /b 1
)

echo [OK] Backend siap!
echo.

echo ================================
echo Starting Backend Server (Port 8080)
echo ================================
echo [*] Launching Spring Boot...
start "Atri Backend - Spring Boot" cmd /k "cd /d %cd% && mvn spring-boot:run"
timeout /t 5 /nobreak
echo.

echo ================================
echo Setup Frontend React
echo ================================

cd /d "%CURRENT_DIR%\frontend"
echo [*] Current directory: %cd%
echo [*] Installing dependencies...
call npm install --silent

if %errorlevel% neq 0 (
    echo [X] Gagal install dependencies!
    pause
    exit /b 1
)

echo [OK] Frontend siap!
echo.

echo ================================
echo Starting Frontend Server (Port 3000)
echo ================================
echo [*] Launching React...
start "Atri Frontend - React" cmd /k "cd /d %cd% && npm start"
timeout /t 5 /nobreak
echo.

echo.
echo ✓ =========================================
echo   Atri Platform sedang loading!
echo   Backend: http://localhost:8080
echo   Frontend: http://localhost:3000
echo.
echo   Browser akan membuka otomatis...
echo.
echo   > Tekan CTRL+C di setiap terminal untuk stop server
echo ✓ =========================================
echo.

REM Open browser
timeout /t 3 /nobreak
start http://localhost:3000

pause
