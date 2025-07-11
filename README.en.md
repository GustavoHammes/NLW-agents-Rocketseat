<div align="center">
  <a href="https://www.rocketseat.com.br/eventos/nlw" target="_blank">
    <img src="https://github.com/user-attachments/assets/f58c441f-7366-4b5d-abfe-2415af721737" width="800" alt="NLW Agents Logo" />
  </a>
  <h1 align="center">NLW Agents 🚀</h1>
  <p align="center">
    Full-stack project developed during <strong>Next Level Week (NLW) Agents</strong> by Rocketseat, held from July 7th to 10th.
    <br>
    <a href="#-about-the-project">About</a> •
    <a href="#-technologies">Technologies</a> •
    <a href="#-api-routes">API Routes</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-license">License</a>
  </p>
  <p align="center">
    <a href="https://app.rocketseat.com.br/certificates/44817ebf-e9fd-4275-b6be-e2f3fba58421" target="_blank">
      <img src="https://img.shields.io/badge/Certificate-View%20Here-blue?style=for-the-badge" alt="Certificate">
    </a>
  </p>
</div>

<div align="center">
  <a href="./README.md">🇧🇷 Portuguese</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 About the Project

**NLW Agents** is a full-stack application (Frontend and Backend) created to manage "agents" and their interactions, using AI for audio transcription and response generation. The project was built during the **Next Level Week** event by [Rocketseat](https://www.rocketseat.com.br/), with the goal of applying modern web development practices.

### ✨ Main Features

- **Reactive Web Interface**: Built with React, Vite, and TypeScript for a modern user experience.
- **Robust API**: Backend server developed with Node.js and Fastify for high performance.
- **AI-powered Database**: Uses PostgreSQL with the `pgvector` extension for similarity search.
- **AI Integration with Gemini**: Leverages Google's Gemini API for audio transcription, embeddings generation, and intelligent responses.
- **Data Validation**: Uses Zod to ensure data integrity end to end.
- **Containerized Environment**: Docker-based setup for quick database initialization.

---

## 🛠️ Technologies

The project is divided into two main parts, using the following technologies:

### **Frontend (web)**

- **[React](https://reactjs.org/)** and **[React Router DOM](https://reactrouter.com/)**
- **[Vite](https://vitejs.dev/)** as the build tool
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[TanStack Query](https://tanstack.com/query/latest)** for async state management
- **[React Hook Form](https://react-hook-form.com/)** and **[Zod](https://zod.dev/)** for forms and validation
- **[Lucide React](https://lucide.dev/)** for icons

### **Backend (server)**

- **[Node.js](https://nodejs.org/en)**
- **[Fastify](https://www.fastify.io/)** as the web framework
- **[Drizzle ORM](https://orm.drizzle.team/)** for database interaction
- **[PostgreSQL](https://www.postgresql.org/)** with **[pgvector](https://github.com/pgvector/pgvector)**
- **[Google Gemini API](https://ai.google.dev/)** for AI features
- **[Docker](https://www.docker.com/)** and **Docker Compose**
- **[Zod](https://zod.dev/)** for data and environment validation

---

## 🗺️ API Routes

| Method | Endpoint                     | Route Description                             |
|--------|------------------------------|-----------------------------------------------|
| `GET`  | `/health`                    | Checks the server's health status.            |
| `GET`  | `/rooms`                     | Lists all created rooms.                      |
| `POST` | `/rooms`                     | Creates a new room.                           |
| `GET`  | `/rooms/:roomId/questions`   | Lists all questions in a specific room.       |
| `POST` | `/rooms/:roomId/questions`   | Submits a new question to a room.             |
| `POST` | `/rooms/:roomId/audio`       | Uploads an audio file to a room.              |

---

## 🚀 Getting Started

To run the project, follow the detailed steps in the `README.md` files in each folder:

- **[Backend (server/README.md)](./server/README.md)**
- **[Frontend (web/README.md)](./web/README.md)**

### General Requirements

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

---

<div align="center">
  Made with ❤️ by <strong>Gustavo Hammes</strong> during NLW by Rocketseat.
</div>
