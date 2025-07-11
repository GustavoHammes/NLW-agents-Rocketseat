<div align="center">
  <h1 align="center">NLW Agents - Web Interface (Frontend) 🎨</h1>
  <p align="center">
    Interface of the <strong>NLW Agents</strong> project, developed with React during Rocketseat’s Next Level Week.
  </p>
</div>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-setup-and-run">Run</a> •
  <a href="#-folder-structure">Structure</a>
</p>

![Badge](https://img.shields.io/badge/Framework-React-blue?style=for-the-badge&logo=react)
![Badge](https://img.shields.io/badge/Build_Tool-Vite-purple?style=for-the-badge&logo=vite)
![Badge](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)
![Badge](https://img.shields.io/badge/Styling-Tailwind_CSS-cyan?style=for-the-badge&logo=tailwindcss)

<div align="center">
  <a href="./README.md">🇧🇷 Portuguese</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 About the Project

This is the **frontend** of the **NLW Agents** application. It's a modern, reactive web interface built to consume the backend API and deliver a smooth user experience when interacting with the AI.

---

## ✨ Technologies

The interface was built using a modern and productive stack:

- **[React](https://reactjs.org/)**: Library for building component-based UIs.
- **[React Router DOM](https://reactrouter.com/)**: Routing library for SPA navigation.
- **[Vite](https://vitejs.dev/)**: High-performance build tool with HMR support.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed language that builds on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid styling.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Manages server state and caching.
- **[React Hook Form](https://react-hook-form.com/)**: Optimized form management.
- **[Zod](https://zod.dev/)**: Schema validation for form data.
- **[Lucide React](https://lucide.dev/)**: Icon set for user interfaces.
- **[Day.js](https://day.js.org/)**: Lightweight library for date formatting and manipulation.

---

## 🚀 Setup and Run

### Requirements

- **[Node.js](https://nodejs.org/en/)** (v20 or later)
- **[Yarn](https://yarnpkg.com/)** or **[npm](https://www.npmjs.com/)**

### Installation Steps

1. **Navigate to the `web` folder:**
   ```bash
   cd NLW-agents-Rocketseat/web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The app will be available at **`http://localhost:5173`**.

> **⚠️ Note:** For the interface to work properly, the **backend server** must be running.

---

## 📁 Folder Structure

The `src` directory follows a modular and organized structure:
```
src/
├── app.tsx                 # Main component with routes
├── components/             # Reusable UI and form components
├── http/                   # API request hooks and types
├── lib/                    # Utilities (cn, dayjs, etc.)
├── pages/                  # Page-level components
└── main.tsx                # React entry point
```

---

<div align="center">
  Made with ❤️ by <strong>Gustavo Hammes</strong> during Rocketseat’s NLW.
</div>