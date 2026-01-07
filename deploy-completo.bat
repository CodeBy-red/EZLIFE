@echo off
echo ===========================================
echo CONFIGURACAO E DEPLOY PARA GITHUB
echo ===========================================
echo.

echo Configurando Git...
git config --global user.name "Gabriel Lima"
git config --global user.email "Gl451606@gmail.com"
echo.

echo Inicializando repositorio Git...
git init
echo.

echo Adicionando arquivos...
git add .
echo.

echo Fazendo primeiro commit...
git commit -m "Primeiro commit - Blog Monetizavel Conteudo Digital"
echo.

echo Renomeando branch para main...
git branch -M main
echo.

echo Adicionando remote origin...
git remote add origin https://github.com/CodeBy-red/EZLIFE.git
echo.

echo Fazendo push para GitHub...
git push -u origin main
echo.

echo ===========================================
echo ✅ PROCESSO CONCLUIDO!
echo ===========================================
echo.
echo Se der erro, verifique:
echo 1. Git esta instalado
echo 2. Voce esta autenticado no GitHub
echo 3. O repositorio existe no GitHub
echo.
pause

