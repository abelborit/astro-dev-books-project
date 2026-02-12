# Astro:

- https://lenguajejs.com/astro/

- https://docs.astro.build/en/basics/astro-components/

- https://docs.astro.build/en/guides/integrations-guide/react/

- https://docs.astro.build/en/reference/cli-reference/
  - Algo importante por si aparece algún problema de tipado o que no encuentra alguna referencia de algún valor o similar, podemos correr en la terminal "npx astro sync" y aquí vemos que sincroniza las dependencias, el contenido, limpia la caché de cierta forma y lo mantiene actualizado o sino se puede hacer "rm -rf .astro" y luego volver a levantar el proyecto con "npm run dev"

---

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
