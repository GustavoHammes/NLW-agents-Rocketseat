# NLW Agents - Server

Este é o backend do projeto **NLW Agents**, desenvolvido durante a trilha de Node.js do evento Next Level Week da [Rocketseat](https://rocketseat.com.br/).

## Tecnologias Utilizadas

Este projeto utiliza uma stack moderna de tecnologias para construir um servidor robusto e eficiente:

-   **Framework:** [Fastify](https://fastify.dev/) - Um framework web de alta performance e baixo overhead para Node.js.
-   **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) com a extensão [pgvector](https://github.com/pgvector/pgvector) para operações de busca por similaridade de vetores.
-   **ORM:** [Drizzle ORM](https://orm.drizzle.team/) - Um ORM TypeScript "headless" que oferece segurança de tipos e uma excelente experiência de desenvolvimento.
-   **Validação:** [Zod](https://zod.dev/) - Para validação de schemas, garantindo a integridade dos dados de entrada (rotas e variáveis de ambiente).
-   **Containerização:** [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) para gerenciar o ambiente do banco de dados de forma isolada e consistente.
-   **Tooling:**
    -   [TypeScript](https://www.typescriptlang.org/)
    -   [Vite](https://vitejs.dev/) como ambiente de desenvolvimento com `vite-node`.
    -   Biome para formatação e linting de código, garantindo um estilo de código consistente e de alta qualidade.

## Setup e Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   Node.js (versão 20.x ou superior)
-   Docker e Docker Compose

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
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
    -   As variáveis padrão já estão configuradas para o ambiente Docker local. Se necessário, ajuste a `DATABASE_URL`.

4.  **Inicie o banco de dados com Docker:**
    -   Este comando irá iniciar um container PostgreSQL com a extensão `pgvector` habilitada, conforme definido no `docker-compose.yml`.
    ```bash
    docker-compose up -d
    ```

5.  **Execute as migrações do banco de dados:**
    -   O Drizzle Kit é utilizado para gerenciar as migrações. Para aplicar o schema atual ao banco de dados, execute:
    ```bash
    npx drizzle-kit migrate
    ```
    *Observação: Para gerar novas migrações baseadas em alterações no schema, use `npx drizzle-kit generate`.*

6.  **Execute o servidor em modo de desenvolvimento:**
    -   O servidor iniciará, por padrão, na porta `3333`.
    ```bash
    npm run dev
    ```
    *(Este comando assume que existe um script `dev` no `package.json`, como por exemplo: `"dev": "vite-node src/server.ts"`)*

---

O servidor estará pronto para receber requisições em `http://localhost:3333`.
