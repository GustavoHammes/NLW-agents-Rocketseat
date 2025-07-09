# NLW Agents

Este é o projeto **NLW Agents**, desenvolvido durante o evento **Next Level Week (NLW)** promovido pela [Rocketseat](https://www.rocketseat.com.br/). A aplicação é uma interface web construída com foco em gerenciamento de usuários (agents), utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.

## 🔧 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor React](https://phosphoricons.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🧩 Padrões e Organização

- **Componentização**: Separação clara entre componentes reutilizáveis e específicos.
- **Validação com Zod**: Schema validation acoplado ao React Hook Form.
- **Estilização com Tailwind**: Utility-first CSS diretamente nas classes dos elementos.
- **Tipagem com TypeScript**: Segurança e previsibilidade no desenvolvimento.

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (recomendado: v18+)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/GustavoHammes/NLW-agents-Rocketseat.git
cd NLW-agents-Rocketseat/web

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📁 Estrutura principal

```
web/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas principais
│   ├── lib/              # Helpers e schemas
│   ├── App.tsx           # Componente raiz
│   └── main.tsx          # Ponto de entrada da aplicação
```

---

> Projeto criado com fins educacionais durante o NLW da Rocketseat 🚀
