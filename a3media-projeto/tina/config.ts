import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Remova se não estiver usando o modo remoto
  token: process.env.TINA_TOKEN, // Remova se não estiver usando o modo remoto
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
        path: "src/pages/paginatemplate1",
        format: "mdx", // Ou "astro" se não quiser usar MDX
        match: {
          include: "[id].mdx", // Ou "[id].astro"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
          },
          {
            type: "number",
            name: "pageNumber",
            label: "Número da Página",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
          },
          // Adicione outros campos que você queira gerenciar
        ],
      },
      {
        name: "paginatemplate2",
        label: "Página Template 2",
        path: "src/pages/paginatemplate2",
        format: "mdx", // Ou "astro"
        match: {
          include: "[id].mdx", // Ou "[id].astro"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
          },
          {
            type: "number",
            name: "pageNumber",
            label: "Número da Página",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
          },
          // Adicione outros campos
        ],
      },
    ],
  },
});