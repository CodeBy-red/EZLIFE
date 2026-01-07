#!/bin/bash

# Script para fazer deploy no GitHub
# Execute este script no terminal após configurar o Git

echo "Inicializando repositório Git..."
git init

echo "Adicionando arquivos..."
git add .

echo "Fazendo primeiro commit..."
git commit -m "Primeiro commit - Blog Monetizável Conteúdo Digital"

echo "Renomeando branch para main..."
git branch -M main

echo "Adicionando remote origin..."
git remote add origin https://github.com/CodeBy-red/EZLIFE.git

echo "Fazendo push para GitHub..."
git push -u origin main

echo "✅ Deploy concluído!"

