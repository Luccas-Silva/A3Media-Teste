import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "paginatemplate1",
        label: "Página Template 1",
        path: "src/pages/paginatemplate1", // O caminho para a pasta do seu template 1
        format: "astro", // Indica que estamos gerenciando arquivos .astro diretamente (experimental) ou mdx
        match: {
          include: "[id].astro", // Para corresponder aos seus arquivos de rota dinâmica
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
          },
          {
            type: "number",
            name: "pageNumber",
            label: "Número da Página",
            isTitle: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
          },
          // Adicione outros campos conforme a estrutura do seu Template 1
        ],
      },
      {
        name: "paginatemplate2",
        label: "Página Template 2",
        path: "src/pages/paginatemplate2", // O caminho para a pasta do seu template 2
        format: "astro", // Indica que estamos gerenciando arquivos .astro diretamente (experimental) ou mdx
        match: {
          include: "[id].astro", // Para corresponder aos seus arquivos de rota dinâmica
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
          },
          {
            type: "number",
            name: "pageNumber",
            label: "Número da Página",
            isTitle: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
          },
          // Adicione outros campos conforme a estrutura do seu Template 2
        ],
      },
    ],
  },
});