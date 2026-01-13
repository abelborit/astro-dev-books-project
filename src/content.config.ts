// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
// import { glob, file } from "astro/loaders";

// 3. Import Zod (para validación de esquemas, tipos de datos, formas de objetos, etc)
import { z } from "astro/zod";

// 4. Define your collection(s)
const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
    pubDate: z.date(), // YYYY-MM-DD
  }),
});

// 5. Export a single `collections` object to register your collection(s)
// Astro espera que el nombre de la colección coincida con el nombre del directorio de contenido, que en este caso es la carpeta "books"
export const collections = { books };
