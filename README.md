# Minhas finanças

App pessoal de controle financeiro (PWA). Um único `index.html`, dados no Firebase Realtime Database.

## Subir no GitHub Pages (primeira vez)

1. No GitHub, crie um repositório novo (ex.: `financas`), público, sem README.
2. Clique em **uploading an existing file** e arraste os 6 arquivos desta pasta:
   `index.html`, `manifest.json`, `sw.js`, `icone-192.png`, `icone-512.png`, `README.md`.
   Clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e `/ (root)`. Salve.
4. Em 1–2 minutos o app fica em `https://SEU-USUARIO.github.io/financas/`.
5. No celular, abra esse endereço no navegador e use **Adicionar à tela de início**.

## Publicar uma versão nova

1. No `index.html`, mude a linha `const VERSAO="1.0";` (ex.: `"1.1"`)
   e, no `sw.js`, a linha `const CACHE='financas-v1.0';` (ex.: `v1.1`).
2. Acrescente uma linha na tela **Mais → Atualizações** dizendo o que mudou.
3. Suba os arquivos alterados no GitHub (substituir).
4. O app instalado avisa sozinho que existe versão nova na próxima abertura,
   ou por **Mais → Atualizações → Procurar versão nova**.

## Dados

- Salvos em `localStorage` (funciona offline) e sincronizados no Firebase.
- O caminho no banco está na constante `SALA` do `index.html`. É um caminho novo;
  o app antigo (Balanço) continua intacto em outro caminho.
- **Mais → Backup** exporta e importa um `.json` com tudo.
