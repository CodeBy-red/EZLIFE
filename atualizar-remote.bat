@echo off
echo ===========================================
echo ATUALIZAR REMOTE COM TOKEN
echo ===========================================
echo.

echo O remote ja existe, vamos atualizar com seu token!
echo.
echo PRIMEIRO: Gere um token em:
echo https://github.com/settings/tokens
echo.
echo Depois cole o token abaixo:
echo.

set /p TOKEN="Cole seu token aqui: "

if "%TOKEN%"=="" (
    echo ERRO: Token nao pode estar vazio!
    pause
    exit /b 1
)

echo.
echo Removendo remote antigo...
git remote remove origin

echo.
echo Adicionando remote novo com token...
git remote add origin https://%TOKEN%@github.com/CodeBy-red/EZLIFE.git

echo.
echo Verificando remote configurado...
git remote -v

echo.
echo Fazendo push para GitHub...
git push -u origin main

echo.
echo ===========================================
echo ✅ PROCESSO CONCLUIDO!
echo ===========================================
pause

