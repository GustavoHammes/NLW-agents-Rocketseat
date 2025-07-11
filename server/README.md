<div align="center">
  <h1 align="center">NLW Agents - Server 🚀</h1>
  <p align="center">
    Backend do projeto <strong>NLW Agents</strong>, desenvolvido durante a trilha de Node.js do evento Next Level Week da Rocketseat.
  </p>
</div>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-rotas-da-api">Rotas</a> •
  <a href="#-setup-e-execução">Execução</a>
</p>

![Badge](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=nodedotjs)
![Badge](https://img.shields.io/badge/Framework-Fastify-lightgrey?style=for-the-badge&logo=fastify)
![Badge](https://img.shields.io/badge/ORM-Drizzle-cyan?style=for-the-badge)
![Badge](https://img.shields.io/badge/Banco_de_Dados-PostgreSQL-blue?style=for-the-badge&logo=postgresql)

<div align="center">
  <a href="./README.md">🇧🇷 Português</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 Sobre o Projeto

Este projeto é o backend da aplicação **NLW Agents**. Ele é responsável por gerenciar a lógica de negócio, servir dados para o frontend, e se comunicar com o banco de dados e a API do Gemini para funções de IA.

---

## 🛠️ Tecnologias

-   **Framework:** **[Fastify](https://fastify.dev/)** - Framework web de alta performance para Node.js.
-   **ORM:** **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript moderno e seguro.
-   **Banco de Dados:** **[PostgreSQL](https://www.postgresql.org/)** com a extensão **[pgvector](https://github.com/pgvector/pgvector)** para busca por similaridade.
-   **Inteligência Artificial:** **[Google Gemini API](https://ai.google.dev/)** para transcrição de áudio, geração de embeddings e respostas.
-   **Validação:** **[Zod](https://zod.dev/)** para validação de schemas de rotas e variáveis de ambiente.
-   **Containerização:** **[Docker](https://www.docker.com/)** e **[Docker Compose](https://docs.docker.com/compose/)** para o ambiente do banco de dados.
-   **Linguagem e Tooling:**
    -   **[TypeScript](https://www.typescriptlang.org/)**
    -   **[Biome](https://biomejs.dev/)** para formatação e linting.

---

## 🗺️ Rotas da API

| Método | Endpoint                      | Descrição da Rota                                                              |
| :----- | :---------------------------- | :----------------------------------------------------------------------------- |
| `GET`  | `/health`                     | Rota de verificação de saúde do servidor.                                      |
| `GET`  | `/rooms`                      | Retorna uma lista com todas as salas e a contagem de perguntas.                |
| `POST` | `/rooms`                      | Cria uma nova sala com nome e descrição.                                  |
| `GET`  | `/rooms/:roomId/questions`    | Retorna as perguntas de uma sala específica, ordenadas pela mais recente.   |
| `POST` | `/rooms/:roomId/questions`    | Cria uma pergunta, busca chunks de áudio similares e gera uma resposta com IA. |
| `POST` | `/rooms/:roomId/audio`        | Faz o upload de um áudio, transcreve, gera embeddings e salva no banco. |

---

## 🚀 Setup e Execução

### Pré-requisitos

-   **[Node.js](https://nodejs.org/en/)** (v20 ou superior)
-   **[Docker](https://www.docker.com/)** e **[Docker Compose](https://docs.docker.com/compose/)**

### Passos

1.  **Acesse a pasta `server`:**
    ```bash
    cd NLW-agents-Rocketseat/server
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    -   Copie `.env.example` para `.env` e adicione sua `GEMINI_API_KEY`.
        ```bash
        cp .env.example .env
        ```

4.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```

5.  **Execute as migrações e popule o banco:**
    ```bash
    npm run db:seed
    ```

6.  **Execute o servidor:**
    ```bash
    npm run dev
    ```

O servidor estará disponível em **`http://localhost:3333`**.

---

<div align="center">
  Feito com ❤️ por <strong>Gustavo Hammes</strong> durante a NLW da Rocketseat.
</div>