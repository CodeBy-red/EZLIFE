@echo off
echo ===========================================
echo CORRIGINDO ERRO DE PERMISSAO GITHUB
echo ===========================================
echo.

echo Atualizando remote origin...
git remote set-url origin https://github.com/CodeBy-red/EZLIFE.git
echo.

echo Verificando remote configurado...
git remote -v
echo.

echo ===========================================
echo OPCOES PARA RESOLVER O ERRO 403:
echo ===========================================
echo.
echo OPCAO 1: Usar Token de Acesso Pessoal
echo   1. Vá em: https://github.com/settings/tokens
echo   2. Gere um novo token (classic)
echo   3. Dê permissões: repo
echo   4. Use o comando abaixo substituindo SEU_TOKEN:
echo      git remote set-url origin https://SEU_TOKEN@github.com/CodeBy-red/EZLIFE.git
echo.
echo OPCAO 2: Usar SSH (recomendado)
echo   1. Configure SSH key no GitHub
echo   2. Use o comando:
echo      git remote set-url origin git@github.com:CodeBy-red/EZLIFE.git
echo.
echo OPCAO 3: Verificar se você tem acesso ao repositório
echo   - Certifique-se que o repositório existe
echo   - Verifique se você tem permissão de escrita
echo.
pause

