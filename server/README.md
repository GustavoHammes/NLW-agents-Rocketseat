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

---

## 📖 Sobre o Projeto

Este projeto é o backend (servidor) da aplicação **NLW Agents**. Ele é responsável por gerenciar toda a lógica de negócio, servir os dados para o frontend e se comunicar com o banco de dados. Construído com uma stack moderna de Node.js, ele foi projetado para ser robusto, eficiente e escalável.

---

## 🛠️ Tecnologias

-   **Framework:** **[Fastify](https://fastify.dev/)** - Um framework web de alta performance e baixo overhead para Node.js.
-   **ORM:** **[Drizzle ORM](https://orm.drizzle.team/)** - Um ORM TypeScript "headless" que oferece segurança de tipos e uma excelente experiência de desenvolvimento para interagir com o banco de dados.
-   **Banco de Dados:** **[PostgreSQL](https://www.postgresql.org/)** com a extensão **[pgvector](https://github.com/pgvector/pgvector)** para operações de busca por similaridade de vetores.
-   **Validação:** **[Zod](https://zod.dev/)** - Utilizado para validação de schemas, garantindo a integridade dos dados nas rotas e nas variáveis de ambiente.
-   **Containerização:** **[Docker](https://www.docker.com/)** e **[Docker Compose](https://docs.docker.com/compose/)** para gerenciar o ambiente do banco de dados de forma isolada e consistente.
-   **Linguagem e Tooling:**
    -   **[TypeScript](https://www.typescriptlang.org/)**: Garante um código mais seguro e manutenível.
    -   **[Biome](https://biomejs.dev/)**: Ferramenta integrada para formatação e linting de código.

---

## 🗺️ Rotas da API

Abaixo estão as rotas implementadas na API até o momento:

| Método | Endpoint | Descrição da Rota                                                               |
| :----- | :------- | :------------------------------------------------------------------------------ |
| `GET`  | `/health`| Rota para verificação de saúde do servidor. Retorna um status `200 OK`.          |
| `GET`  | `/rooms` | Retorna uma lista com todas as salas (`rooms`) cadastradas no banco de dados. |

---

## 🚀 Setup e Execução

### Pré-requisitos

-   **[Node.js](https://nodejs.org/en/)** (versão 20.x ou superior)
-   **[Docker](https://www.docker.com/)** e **[Docker Compose](https://docs.docker.com/compose/)**

### Passos

1.  **Clone o repositório e acesse a pasta:**
    ```bash
    git clone [https://github.com/GustavoHammes/NLW-agents-Rocketseat.git](https://github.com/GustavoHammes/NLW-agents-Rocketseat.git)
    cd NLW-agents-Rocketseat/server
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    -   Copie o arquivo `.env.example` para um novo arquivo chamado `.env`.
        ```bash
        cp .env.example .env
        ```
    -   *As variáveis padrão já estão prontas para o ambiente Docker local.*

4.  **Inicie o banco de dados com Docker:**
    -   Este comando irá criar e iniciar o container PostgreSQL em background.
    ```bash
    docker-compose up -d
    ```

5.  **Execute as migrações e popule o banco:**
    -   O Drizzle Kit gerencia o schema do banco. O script `db:seed` aplica as migrações e insere dados iniciais.
    ```bash
    npm run db:seed
    ```
    -   *Para gerar novas migrações, use: `npx drizzle-kit generate`.*

6.  **Execute o servidor:**
    -   O servidor iniciará em modo de desenvolvimento com auto-reload.
    ```bash
    npm run dev
    ```

O servidor estará pronto para receber requisições em **`http://localhost:3333`**.

---

<div align="center">
  Feito com ❤️ por Gustavo Hammes durante a NLW da Rocketseat.
</div>
