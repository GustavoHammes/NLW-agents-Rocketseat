<div align="center">
  <h1 align="center">NLW Agents - Server 🚀</h1>
  <p align="center">
    Backend of the <strong>NLW Agents</strong> project, developed during the Node.js track of Rocketseat’s Next Level Week event.
  </p>
</div>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-api-routes">Routes</a> •
  <a href="#-setup-and-run">Run</a>
</p>

![Badge](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=nodedotjs)
![Badge](https://img.shields.io/badge/Framework-Fastify-lightgrey?style=for-the-badge&logo=fastify)
![Badge](https://img.shields.io/badge/ORM-Drizzle-cyan?style=for-the-badge)
![Badge](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=postgresql)

<div align="center">
  <a href="./README.md">🇧🇷 Portuguese</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 About the Project

This is the backend of the **NLW Agents** application. It's responsible for handling business logic, serving data to the frontend, and interacting with both the database and the Gemini API for AI features.

---

## 🛠️ Technologies

- **Framework:** **[Fastify](https://fastify.dev/)** - High-performance web framework for Node.js.
- **ORM:** **[Drizzle ORM](https://orm.drizzle.team/)** - Modern and type-safe TypeScript ORM.
- **Database:** **[PostgreSQL](https://www.postgresql.org/)** with **[pgvector](https://github.com/pgvector/pgvector)** for similarity searches.
- **AI:** **[Google Gemini API](https://ai.google.dev/)** for audio transcription, embeddings generation, and responses.
- **Validation:** **[Zod](https://zod.dev/)** for schema and environment variable validation.
- **Containerization:** **[Docker](https://www.docker.com/)** and **[Docker Compose](https://docs.docker.com/compose/)** for setting up the database.
- **Language and Tooling:**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Biome](https://biomejs.dev/)** for formatting and linting

---

## 🗺️ API Routes

| Method | Endpoint                   | Description                                                                 |
| :----- | :------------------------- | :-------------------------------------------------------------------------- |
| `GET`  | `/health`                  | Health check route.                                                         |
| `GET`  | `/rooms`                   | Returns all rooms with question counts.                                     |
| `POST` | `/rooms`                   | Creates a new room with name and description.                               |
| `GET`  | `/rooms/:roomId/questions` | Returns questions from a specific room, ordered by most recent.             |
| `POST` | `/rooms/:roomId/questions` | Creates a question, fetches similar audio chunks and generates an AI reply. |
| `POST` | `/rooms/:roomId/audio`     | Uploads audio, transcribes, embeds, and saves it to the database.           |

---

## 🚀 Setup and Run

### Prerequisites

- **[Node.js](https://nodejs.org/en/)** (v20 or higher)
- **[Docker](https://www.docker.com/)** and **[Docker Compose](https://docs.docker.com/compose/)**

### Steps

1. **Navigate to the `server` folder:**
    ```bash
    cd NLW-agents-Rocketseat/server
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` and add your `GEMINI_API_KEY`.
      ```bash
      cp .env.example .env
      ```

4. **Start the database with Docker:**
    ```bash
    docker-compose up -d
    ```

5. **Run migrations and seed the database:**
    ```bash
    npm run db:seed
    ```

6. **Start the server:**
    ```bash
    npm run dev
    ```

The server will be running at **`http://localhost:3333`**.

---

<div align="center">
  Made with ❤️ by <strong>Gustavo Hammes</strong> during Rocketseat’s NLW.
</div>