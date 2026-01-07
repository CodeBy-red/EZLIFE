# Configuração SSH para GitHub

## Passo a Passo

### 1. Gerar Chave SSH (se ainda não tiver)

Execute no terminal:
```bash
ssh-keygen -t ed25519 -C "Gl451606@gmail.com"
```

- Pressione **Enter** para aceitar o local padrão
- Pressione **Enter** para não usar senha (ou crie uma senha se preferir)

### 2. Copiar a Chave Pública

Execute:
```bash
type %USERPROFILE%\.ssh\id_ed25519.pub
```

**COPIE TODO O TEXTO** que aparecer (começa com `ssh-ed25519`)

### 3. Adicionar no GitHub

1. Acesse: https://github.com/settings/keys
2. Clique em **"New SSH key"**
3. Dê um título (ex: "Meu Computador")
4. Cole a chave que você copiou
5. Clique em **"Add SSH key"**

### 4. Testar Conexão SSH

Execute:
```bash
ssh -T git@github.com
```

Você deve ver: `Hi CodeBy-red! You've successfully authenticated...`

### 5. Atualizar Remote e Fazer Push

```bash
git remote set-url origin git@github.com:CodeBy-red/EZLIFE.git
git push -u origin main
```

## Script Automático

Ou simplesmente execute:
```bash
.\configurar-ssh.bat
```

O script vai fazer tudo automaticamente!

## Solução de Problemas

**Se der erro "Permission denied":**
- Verifique se adicionou a chave no GitHub corretamente
- Certifique-se de copiar a chave **pública** (id_ed25519.pub), não a privada

**Se não conseguir gerar a chave:**
- Certifique-se de que o Git está instalado corretamente
- Tente usar: `ssh-keygen -t rsa -b 4096 -C "Gl451606@gmail.com"`

