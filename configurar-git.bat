@echo off
echo ===========================================
echo CONFIGURAR GIT COM NOVO EMAIL
echo ===========================================
echo.

echo Configurando Git...
git config --global user.name "Gabriel Lima"
git config --global user.email "gabriel.araujo@velotax.com.br"

echo.
echo Configuracao atualizada!
echo.
echo Verificando configuracao:
git config --global user.name
git config --global user.email

echo.
pause

