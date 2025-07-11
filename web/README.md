<div align="center">
  <h1 align="center">NLW Agents - Interface Web (Frontend) 🎨</h1>
  <p align="center">
    Interface do projeto <strong>NLW Agents</strong>, desenvolvida com React durante a Next Level Week da Rocketseat.
  </p>
</div>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-tecnologias">Recursos</a> •
  <a href="#-setup-e-execução">Execução</a> •
  <a href="#-estrutura-de-pastas">Estrutura</a>
</p>

![Badge](https://img.shields.io/badge/Framework-React-blue?style=for-the-badge&logo=react)
![Badge](https://img.shields.io/badge/Build_Tool-Vite-purple?style=for-the-badge&logo=vite)
![Badge](https://img.shields.io/badge/Linguagem-TypeScript-blue?style=for-the-badge&logo=typescript)
![Badge](https://img.shields.io/badge/Estilização-Tailwind_CSS-cyan?style=for-the-badge&logo=tailwindcss)

<div align="center">
  <a href="./README.md">🇧🇷 Português</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a href="./README.en.md">🇺🇸 English</a>
</div>

---

## 📖 Sobre o Projeto

Este é o frontend da aplicação **NLW Agents**. Trata-se de uma interface web moderna e reativa, construída para consumir a API do servidor e proporcionar uma experiência de usuário fluida para interagir com a IA.

---

## ✨ Tecnologias

A interface foi construída utilizando uma stack moderna e produtiva:

-   **[React](https://reactjs.org/)**: Biblioteca para criar interfaces de usuário componentizadas.
-   **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas na aplicação.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build de alta performance com Hot Module Replacement (HMR).
-   **[TypeScript](https://www.typescriptlang.org/)**: Adiciona segurança de tipos ao JavaScript.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização ágil.
-   **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Gerenciamento de estado de servidor, cache e requisições assíncronas.
-   **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários otimizado.
-   **[Zod](https://zod.dev/)**: Validação de schemas para os formulários.
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones para a interface.
-   **[Day.js](https://day.js.org/)**: Para manipulação e formatação de datas.

---

## 🚀 Setup e Execução

### Pré-requisitos

-   **[Node.js](https://nodejs.org/en/)** (v20 ou superior)
-   **[Yarn](https://yarnpkg.com/)** ou **[npm](https://www.npmjs.com/)**

### Passos para Instalação

1.  **Acesse a pasta `web`:**
    ```bash
    cd NLW-agents-Rocketseat/web
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em **`http://localhost:5173`**.

> **⚠️ Importante:** Para que a interface funcione corretamente, o **servidor (backend)** do projeto precisa estar em execução.

---

## 📁 Estrutura de Pastas

A organização dos arquivos no diretório `src` segue uma estrutura modular:
```
src/
├── app.tsx                 # Componente principal com rotas
├── components/             # Componentes reutilizáveis (UI e de formulários)
├── http/                   # Hooks e tipos para requisições à API
├── lib/                    # Utilitários (cn, dayjs)
├── pages/                  # Páginas da aplicação
└── main.tsx                # Ponto de entrada do React
```

---

<div align="center">
  Feito com ❤️ por <strong>Gustavo Hammes</strong> durante a NLW da Rocketseat.
</div>