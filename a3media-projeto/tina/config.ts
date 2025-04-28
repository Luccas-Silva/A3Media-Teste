import { defineConfig } from 'tinacms';

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
        name: 'template1',
        label: 'Página Template 1',
        path: 'src/content/template1', 
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Conteúdo Principal',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagem',
            required: false,
          },
        ],
      },
      {
        name: 'template2',
        label: 'Página Template 2',
        path: 'src/content/template2', 
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Conteúdo Principal',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagem',
            required: false,
          },
        ],
      },
    ],
  },
});
