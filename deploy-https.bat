@echo off
echo ===========================================
echo DEPLOY VIA HTTPS COM TOKEN
echo ===========================================
echo.

echo ATENCAO: Voce precisa de um Token de Acesso Pessoal do GitHub!
echo.
echo Para gerar o token:
echo 1. Acesse: https://github.com/settings/tokens
echo 2. Clique em "Generate new token" - "Generate new token (classic)"
echo 3. Dê um nome (ex: EZLIFE Project)
echo 4. Marque a opcao "repo" (todas as permissoes)
echo 5. Clique em "Generate token"
echo 6. COPIE O TOKEN (voce so vera uma vez!)
echo.
echo ===========================================
echo.

set /p TOKEN="Cole seu token aqui: "

if "%TOKEN%"=="" (
    echo ERRO: Token nao pode estar vazio!
    pause
    exit /b 1
)

echo.
echo Configurando Git...
git config --global user.name "Gabriel Lima"
git config --global user.email "Gl451606@gmail.com"
echo.

echo Atualizando remote com token...
git remote set-url origin https://%TOKEN%@github.com/CodeBy-red/EZLIFE.git
echo.

echo Verificando remote...
git remote -v
echo.

echo Fazendo push para GitHub...
git push -u origin main
echo.

echo ===========================================
echo ✅ PROCESSO CONCLUIDO!
echo ===========================================
pause

