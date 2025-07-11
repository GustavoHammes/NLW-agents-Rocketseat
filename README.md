<div align="center">
  <a href="https://www.rocketseat.com.br/eventos/nlw" target="_blank">
    <img src="https://github.com/user-attachments/assets/f58c441f-7366-4b5d-abfe-2415af721737" width="800" alt="NLW Agents Logo" width="200" />
  </a>
  <h1 align="center">NLW Agents 🚀</h1>
  <p align="center">
    Projeto full-stack desenvolvido durante a <strong>Next Level Week (NLW) Agents</strong> da Rocketseat, que ocorreu entre os dias 7 e 10 de Julho.
    <br>
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-rotas-da-api">Rotas da API</a> •
    <a href="#-começando">Começando</a> •
    <a href="#-licença">Licença</a>
  </p>
  <p align="center">
    <a href="https://app.rocketseat.com.br/certificates/44817ebf-e9fd-4275-b6be-e2f3fba58421" target="_blank">
      <img src="https://img.shields.io/badge/Certificado-Ver%20Aqui-blue?style=for-the-badge" alt="Certificado">
    </a>
  </p>
</div>

<div align="center">
  <a href="./README.md">🇧🇷 Português</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 Sobre o Projeto

O **NLW Agents** é uma aplicação completa (Frontend e Backend) criada para gerenciar "agentes" e suas interações, utilizando IA para transcrição de áudio e geração de respostas. O projeto foi desenvolvido durante o evento **Next Level Week** da [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de aplicar conceitos modernos de desenvolvimento web.

### ✨ Principais Funcionalidades

-   **Interface Web Reativa**: Construída com React, Vite e TypeScript para uma experiência de usuário moderna.
-   **API Robusta**: Servidor backend desenvolvido com Node.js e Fastify, garantindo alta performance.
-   **Banco de Dados com IA**: Interação com PostgreSQL e a extensão `pgvector` para buscas de similaridade.
-   **Inteligência Artificial com Gemini**: Utilização da API do Google Gemini para transcrição de áudio, geração de embeddings e respostas inteligentes.
-   **Validação de Dados**: Uso de Zod para garantir a integridade dos dados de ponta a ponta.
-   **Ambiente Containerizado**: Uso do Docker para inicializar o banco de dados, facilitando a configuração.

---

## 🛠️ Tecnologias

O projeto é dividido em duas partes principais, utilizando as seguintes tecnologias:

### **Frontend (web)**

-   **[React](https://reactjs.org/)** e **[React Router DOM](https://reactrouter.com/)**
-   **[Vite](https://vitejs.dev/)** como build tool
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[Tailwind CSS](https://tailwindcss.com/)** para estilização
-   **[TanStack Query](https://tanstack.com/query/latest)** para gerenciamento de estado assíncrono
-   **[React Hook Form](https://react-hook-form.com/)** e **[Zod](https://zod.dev/)** para formulários e validação
-   **[Lucide React](https://lucide.dev/)** para ícones

### **Backend (server)**

-   **[Node.js](https://nodejs.org/en)**
-   **[Fastify](https://www.fastify.io/)** como framework web
-   **[Drizzle ORM](https://orm.drizzle.team/)** para interação com o banco de dados
-   **[PostgreSQL](https://www.postgresql.org/)** com **[pgvector](https://github.com/pgvector/pgvector)**
-   **[Google Gemini API](https://ai.google.dev/)** para IA
-   **[Docker](https://www.docker.com/)** e **Docker Compose**
-   **[Zod](https://zod.dev/)** para validação de dados e variáveis de ambiente

---

## 🗺️ Rotas da API

| Método | Endpoint                      | Descrição da Rota                                       |
| :----- | :---------------------------- | :------------------------------------------------------ |
| `GET`  | `/health`                     | Verifica a saúde do servidor.                           |
| `GET`  | `/rooms`                      | Lista todas as salas cadastradas.                       |
| `POST` | `/rooms`                      | Cria uma nova sala.                                     |
| `GET`  | `/rooms/:roomId/questions`    | Lista todas as perguntas de uma sala específica.        |
| `POST` | `/rooms/:roomId/questions`    | Cria uma nova pergunta em uma sala.                     |
| `POST` | `/rooms/:roomId/audio`        | Realiza o upload de um áudio para uma sala.             |

---

## 🚀 Começando

Para executar o projeto, siga os passos detalhados nos `README.md` de cada pasta:

-   **[Backend (server/README.md)](./server/README.md)**
-   **[Frontend (web/README.md)](./web/README.md)**

### Pré-requisitos Gerais

-   [Node.js](https://nodejs.org/en/) (v20 ou superior)
-   [Docker](https://www.docker.com/products/docker-desktop/)
-   [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

---


<div align="center">
  Feito com ❤️ por <strong>Gustavo Hammes</strong> durante a NLW da Rocketseat.
</div>