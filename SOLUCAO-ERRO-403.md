# Solução para Erro 403 - Permission Denied

## O Problema
Você está recebendo erro 403 porque o Git não consegue autenticar você no GitHub.

## Soluções

### ✅ Solução 1: Usar Token de Acesso Pessoal (Mais Fácil)

1. **Gerar Token no GitHub:**
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token" → "Generate new token (classic)"
   - Dê um nome (ex: "EZLIFE Project")
   - Marque a opção **repo** (todas as permissões de repositório)
   - Clique em "Generate token"
   - **COPIE O TOKEN** (você só verá uma vez!)

2. **Atualizar o remote com o token:**
   ```bash
   git remote set-url origin https://SEU_TOKEN_AQUI@github.com/CodeBy-red/EZLIFE.git
   ```

3. **Fazer push:**
   ```bash
   git push -u origin main
   ```

### ✅ Solução 2: Usar SSH (Recomendado para longo prazo)

1. **Gerar chave SSH (se ainda não tiver):**
   ```bash
   ssh-keygen -t ed25519 -C "Gl451606@gmail.com"
   ```
   (Pressione Enter para aceitar o local padrão)

2. **Copiar a chave pública:**
   ```bash
   type %USERPROFILE%\.ssh\id_ed25519.pub
   ```
   (Copie todo o conteúdo que aparecer)

3. **Adicionar no GitHub:**
   - Acesse: https://github.com/settings/keys
   - Clique em "New SSH key"
   - Cole a chave copiada
   - Salve

4. **Atualizar remote para SSH:**
   ```bash
   git remote set-url origin git@github.com:CodeBy-red/EZLIFE.git
   ```

5. **Fazer push:**
   ```bash
   git push -u origin main
   ```

### ✅ Solução 3: Usar GitHub Desktop ou GitHub CLI

Se preferir interface gráfica:
- **GitHub Desktop**: https://desktop.github.com/
- **GitHub CLI**: https://cli.github.com/

### ✅ Solução 4: Verificar Permissões do Repositório

Certifique-se de que:
- O repositório `CodeBy-red/EZLIFE` existe no GitHub
- Você tem permissão de escrita no repositório
- Você está logado na conta correta do GitHub

## Comandos Rápidos

**Se já tem token:**
```bash
git remote set-url origin https://SEU_TOKEN@github.com/CodeBy-red/EZLIFE.git
git push -u origin main
```

**Se já configurou SSH:**
```bash
git remote set-url origin git@github.com:CodeBy-red/EZLIFE.git
git push -u origin main
```

## Dica Importante

O token ou SSH é necessário porque o GitHub não aceita mais senhas simples. Use uma das soluções acima!

