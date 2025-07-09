<div align="center">
  <h1 align="center">NLW Agents - Interface Web (Frontend) 🎨</h1>
  <p align="center">
    Interface do projeto <strong>NLW Agents</strong>, desenvolvida com React durante a Next Level Week da Rocketseat.
  </p>
</div>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-principais-recursos-e-tecnologias">Recursos</a> •
  <a href="#-setup-e-execução">Execução</a> •
  <a href="#-estrutura-de-pastas">Estrutura</a>
</p>

![Badge](https://img.shields.io/badge/Framework-React-blue?style=for-the-badge&logo=react)
![Badge](https://img.shields.io/badge/Build_Tool-Vite-purple?style=for-the-badge&logo=vite)
![Badge](https://img.shields.io/badge/Linguagem-TypeScript-blue?style=for-the-badge&logo=typescript)
![Badge](https://img.shields.io/badge/Estilização-Tailwind_CSS-cyan?style=for-the-badge&logo=tailwindcss)

---

## 📖 Sobre o Projeto

Este é o frontend da aplicação **NLW Agents**. Trata-se de uma interface web moderna e reativa, construída para consumir a API do servidor e proporcionar uma experiência de usuário fluida para o gerenciamento de "agentes". O projeto aplica conceitos de componentização, gerenciamento de estado e validação de dados no lado do cliente.

---

## ✨ Principais Recursos e Tecnologias

A interface foi construída utilizando uma stack moderna e produtiva:

-   **[React](https://reactjs.org/)**: Biblioteca para criar interfaces de usuário componentizadas e declarativas.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build de alta performance que oferece um ambiente de desenvolvimento rápido com Hot Module Replacement (HMR).
-   **[TypeScript](https://www.typescriptlang.org/)**: Adiciona segurança de tipos ao JavaScript, prevenindo bugs e melhorando a manutenibilidade do código.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização ágil e customizável diretamente no JSX.
-   **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários otimizado e de fácil integração.
-   **[Zod](https://zod.dev/)**: Utilizado em conjunto com o React Hook Form para realizar a validação de schemas, garantindo que os dados inseridos pelo usuário sejam válidos antes de serem enviados à API.
-   **[Phosphor React](https://phosphoricons.com/)**: Biblioteca de ícones leves e consistentes para a interface.

---

## 🚀 Setup e Execução

### Pré-requisitos

-   **[Node.js](https://nodejs.org/en/)** (versão 18.x ou superior)
-   **[Yarn](https://yarnpkg.com/)** ou **[npm](https://www.npmjs.com/)**

### Passos para Instalação

1.  **Clone o repositório e acesse a pasta `web`:**
    ```bash
    git clone [https://github.com/GustavoHammes/NLW-agents-Rocketseat.git](https://github.com/GustavoHammes/NLW-agents-Rocketseat.git)
    cd NLW-agents-Rocketseat/web
    ```

2.  **Instale as dependências:**
    ```bash
    # Usando npm
    npm install

    # Ou usando Yarn
    yarn install
    ```

3.  **Execute a aplicação:**
    -   Este comando iniciará o servidor de desenvolvimento do Vite.
    ```bash
    # Usando npm
    npm run dev

    # Ou usando Yarn
    yarn dev
    ```

A aplicação estará disponível em **`http://localhost:5173`**.

> **⚠️ Importante:** Para que a interface funcione corretamente e possa buscar os dados, o **servidor (backend)** do projeto precisa estar em execução.

---

## 📁 Estrutura de Pastas

A organização dos arquivos no diretório `src` segue uma estrutura modular para facilitar a manutenção:
```
src/
├── components/       # Componentes reutilizáveis (botões, inputs, etc.)
├── pages/            # Páginas da aplicação
├── lib/              # Funções auxiliares e schemas de validação (Zod)
├── App.tsx           # Componente raiz da aplicação
└── main.tsx          # Ponto de entrada, onde o React é renderizado
```

---

<div align="center">
  Feito com ❤️ por Gustavo Hammes durante a NLW da Rocketseat.
</div>
