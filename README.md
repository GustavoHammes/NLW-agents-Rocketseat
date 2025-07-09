<div align="center">
  <h1 align="center">NLW Agents 🚀</h1>
  <p align="center">
    Projeto full-stack desenvolvido durante a <strong>Next Level Week (NLW)</strong> da Rocketseat.
  </p>
</div>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-começando">Começando</a> •
  <a href="#-licença">Licença</a>
</p>

![Badge](https://img.shields.io/badge/Tecnologia-React-blue?style=for-the-badge&logo=react)
![Badge](https://img.shields.io/badge/Tecnologia-Node.js-green?style=for-the-badge&logo=nodedotjs)
![Badge](https://img.shields.io/badge/Tecnologia-TypeScript-blue?style=for-the-badge&logo=typescript)
![Badge](https://img.shields.io/badge/Estilização-Tailwind_CSS-cyan?style=for-the-badge&logo=tailwindcss)
![Badge](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

---

## 📖 Sobre o Projeto

O **NLW Agents** é uma aplicação completa (Frontend e Backend) criada para gerenciar "agentes" e suas interações. O projeto foi desenvolvido durante o evento **Next Level Week** da [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de aplicar conceitos modernos de desenvolvimento web, desde a estruturação da interface com React até a criação de uma API robusta com Node.js.

### ✨ Principais Funcionalidades

-   **Interface Web**: Construída com React e Vite para uma experiência de usuário rápida e reativa.
-   **API RESTful**: Servidor backend desenvolvido com Fastify, garantindo alta performance.
-   **Banco de Dados**: Interação com PostgreSQL através do Drizzle ORM.
-   **Validação de Dados**: Uso de Zod tanto no frontend (com React Hook Form) quanto no backend para garantir a integridade dos dados.
-   **Ambiente Containerizado**: Uso do Docker para inicializar o banco de dados, facilitando a configuração do ambiente de desenvolvimento.

## 🛠️ Tecnologias

O projeto é dividido em duas partes principais:

### **Frontend (web)**

-   **[React](https://reactjs.org/)**: Biblioteca para construir a interface de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o desenvolvimento frontend.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida.
-   **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários de forma performática.
-   **[Zod](https://zod.dev/)**: Validação de schemas de dados.

### **Backend (server)**

-   **[Node.js](https://nodejs.org/en)**: Ambiente de execução do servidor.
-   **[Fastify](https://www.fastify.io/)**: Framework web focado em performance.
-   **[Drizzle ORM](https://orm.drizzle.team/)**: ORM moderno para interagir com o banco de dados.
-   **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional.
-   **[Docker](https://www.docker.com/)**: Plataforma para criar e gerenciar containers.

## 🚀 Começando

Para executar o projeto, você precisará clonar o repositório e configurar tanto o **servidor** quanto a **interface web**.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (v20 ou superior)
-   [Docker](https://www.docker.com/products/docker-desktop/)
-   [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

---

### 📦 **Backend (Server)**

Siga os passos para configurar o servidor:

```bash
# 1. Navegue para a pasta do servidor
cd NLW-agents-Rocketseat/server

# 2. Instale as dependências
npm install

# 3. Inicie o container do banco de dados com Docker
docker-compose up -d

# 4. Crie o arquivo .env a partir do exemplo e configure a DATABASE_URL
# (O valor padrão já deve funcionar com o docker-compose)
cp .env.example .env

# 5. Execute as migrations e popule o banco
npm run db:seed

# 6. Inicie o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

---

### 🖥️ **Frontend (Web)**

Em um novo terminal, siga os passos para configurar a interface:

```bash
# 1. Navegue para a pasta da web
cd NLW-agents-Rocketseat/web

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação web estará disponível em `http://localhost:5173`.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito com ❤️ por Gustavo Hammes durante a NLW da Rocketseat.
</div>
