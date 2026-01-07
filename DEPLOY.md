# Como fazer deploy no GitHub

## Pré-requisitos
1. Tenha o Git instalado no seu computador
2. Tenha uma conta no GitHub
3. Crie o repositório no GitHub (se ainda não criou)

## Passos para fazer deploy

### Opção 1: Usando o script (Linux/Mac)
```bash
chmod +x deploy-github.sh
./deploy-github.sh
```

### Opção 2: Comandos manuais

1. **Inicializar repositório Git** (se ainda não foi feito):
```bash
git init
```

2. **Adicionar todos os arquivos**:
```bash
git add .
```

3. **Fazer o primeiro commit**:
```bash
git commit -m "Primeiro commit - Blog Monetizável Conteúdo Digital"
```

4. **Renomear branch para main**:
```bash
git branch -M main
```

5. **Adicionar remote do GitHub**:
```bash
git remote add origin https://github.com/CodeBy-red/EZLIFE.git
```

6. **Fazer push para GitHub**:
```bash
git push -u origin main
```

## Se o repositório já existe e você quer atualizar

```bash
git add .
git commit -m "Atualização do projeto"
git push origin main
```

## Notas importantes

- Certifique-se de que o arquivo `.gitignore` está configurado corretamente
- Não faça commit de arquivos sensíveis (senhas, chaves de API, etc.)
- O arquivo `.env` já está no `.gitignore` por padrão

