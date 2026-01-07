@echo off
echo ===========================================
echo CONFIGURACAO SSH PARA GITHUB
echo ===========================================
echo.

echo Verificando se ja existe chave SSH...
if exist "%USERPROFILE%\.ssh\id_ed25519.pub" (
    echo Chave SSH encontrada!
    echo.
    echo Sua chave publica SSH:
    type "%USERPROFILE%\.ssh\id_ed25519.pub"
    echo.
    echo ===========================================
    echo COPIE A CHAVE ACIMA E ADICIONE NO GITHUB:
    echo https://github.com/settings/keys
    echo ===========================================
    echo.
) else (
    echo Gerando nova chave SSH...
    echo.
    ssh-keygen -t ed25519 -C "Gl451606@gmail.com" -f "%USERPROFILE%\.ssh\id_ed25519" -N ""
    echo.
    echo Chave SSH gerada!
    echo.
    echo Sua chave publica SSH:
    type "%USERPROFILE%\.ssh\id_ed25519.pub"
    echo.
    echo ===========================================
    echo COPIE A CHAVE ACIMA E ADICIONE NO GITHUB:
    echo https://github.com/settings/keys
    echo ===========================================
    echo.
)

echo.
echo Aguardando voce adicionar a chave no GitHub...
echo Pressione qualquer tecla quando terminar...
pause >nul

echo.
echo Atualizando remote para usar SSH...
git remote set-url origin git@github.com:CodeBy-red/EZLIFE.git

echo.
echo Verificando conexao SSH...
ssh -T git@github.com

echo.
echo Fazendo push para GitHub...
git push -u origin main

echo.
echo ===========================================
echo ✅ PROCESSO CONCLUIDO!
echo ===========================================
pause

