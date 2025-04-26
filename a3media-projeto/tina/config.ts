import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: null,
  token: null, 
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
        format: "mdx", 
        match: {
          include: "[id].mdx",
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
        ],
      },
      {
        name: "paginatemplate2",
        label: "Página Template 2",
        path: "src/pages/paginatemplate2",
        format: "mdx", 
        match: {
          include: "[id].mdx", 
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
        ],
      },
    ],
  },
});