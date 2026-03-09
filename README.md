# 📦 API de Gerenciamento de Pedidos

Olá! Este projeto é uma ferramenta para organizar e gerenciar pedidos de uma loja. Ele foi criado para que você possa cadastrar novos pedidos, ver a lista do que já foi vendido, atualizar informações ou até excluir um pedido se algo deu errado.

---

## 🚀 Como fazer funcionar na sua máquina?

Para rodar esse projeto, você só precisa de duas coisas instaladas: **Node.js** e um terminal (pode ser o do Windows, o VS Code ou qualquer um que você goste).

### 1. Preparando o terreno
Abra a pasta do projeto no seu terminal e instale os pacotes necessários:
```bash
npm install
```

### 2. Ligando o motor
Agora, vamos colocar a API para rodar:
```bash
npm start
```
Se tudo der certo, você verá uma mensagem dizendo: `Server is running on port 3000`. Isso significa que sua loja digital já está aberta!

---

## 🛠️ Como eu uso isso? (O jeito mais fácil)

A maneira mais legal de testar é usando uma "página de controle" que eu já deixei pronta. 

1. Com o servidor ligado, abra o seu navegador e digite:  
   👉 `http://localhost:3000/api-docs`

2. Lá você vai ver todos os "botões" (endpoints) da nossa API.

### 🔑 Primeiro passo: Criar sua conta e entrar
Como a API é protegida, você precisa se identificar:
1. Procure a aba **Auth** e use o `/auth/register` para criar seu usuário e senha.
2. Depois, use o `/auth/login` com os mesmos dados. A API vai te dar um código comprido chamado **Token**.
3. Copie esse código, clique no botão verde **"Authorize"** no topo da página e cole ele lá. Pronto! Agora você tem a chave para mexer nos pedidos.

---

## 📂 O que essa API faz por baixo dos panos?

Quando você envia um pedido para a API, ela é inteligente:
- Ela recebe os dados no formato que você enviou (ex: `numeroPedido`).
- Ela traduz e salva no banco de dados de um jeito organizado (ex: `orderId`).
- Ela guarda tudo em um arquivo chamado `database.sqlite` que fica na pasta do projeto. Você não precisa instalar nenhum banco de dados pesado, ele já funciona sozinho!

### Exemplos de coisas que você pode fazer:
- **Criar Pedido**: Registra uma venda com vários itens de uma vez.
- **Listar Tudo**: Mostra todos os pedidos que você já fez.
- **Buscar um específico**: Se você souber o número do pedido, pode ver os detalhes só dele.
- **Atualizar**: Mudou o valor ou a quantidade? Você pode alterar sem problemas.
- **Deletar**: Se o pedido foi cancelado, você pode tirar ele do sistema.

---

## 🧩 Organização do Código (Para curiosos)

Se você abrir as pastas, vai encontrar:
- `src/models`: Onde definimos como os dados são salvos.
- `src/controllers`: Onde a mágica acontece (quem recebe o seu clique e decide o que fazer).
- `src/routes`: Onde definimos os endereços da API.
- `src/middleware`: O "segurança" da API, que confere se você está logado.

Espero que isso ajude a entender como tudo funciona! Qualquer dúvida, é só olhar os arquivos dentro da pasta `src`. 😊