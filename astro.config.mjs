// @ts-check
import { defineConfig, envField } from "astro/config";
import node from "@astrojs/node";
import { fileURLToPath } from "url";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

/* Vite espera rutas absolutas (desde la raíz del proyecto), no relativas como solo colocar "./src/components" */
const __dirname = fileURLToPath(new URL(".", import.meta.url));
// console.log({__dirname});
// console.log("__dirname", __dirname + "src/components");
// console.log("path.join", path.join(__dirname, "src/components"));

// https://astro.build/config
export default defineConfig({
  /* https://docs.astro.build/en/guides/on-demand-rendering/#server-mode */
  /* https://docs.astro.build/en/reference/configuration-reference/#output */
  /* con el -- output: "server" -- sirve para utilizar SSR para las páginas que lo necesiten, mostrando un sitio representado por el servidor ya que habrán algúnas páginas o componentes dinámicos, es decir, se está habilitando la configuración para que se renderice del lado del servidor pero para los componentes que queremos que sigan siendo estáticos se tendrán que agregar -- export const prerender = true -- para que no se generen del lado del servidor y sigan siendo estáticos, entonces al generar el build se creará su HTML como siempre */
  output: "server",

  /* https://docs.astro.build/en/guides/integrations-guide/node/ */
  /* https://docs.astro.build/en/reference/configuration-reference/#adapter */
  /* el adaptador habilita la renderización bajo demanda en el proyecto Astro. Para renderizar cualquier página bajo demanda, necesitas agregar un adaptador. Cada adaptador permite a Astro generar un script que ejecuta tu proyecto en un entorno de ejecución específico, el entorno que ejecuta el código en el servidor para generar páginas cuando se solicitan (p. ej., Netlify, Cloudflare) */
  adapter: node({
    /* El modo "standalone" crea un servidor que se inicia automáticamente al ejecutar el módulo de entrada. Esto facilita la implementación de la compilación en un host sin necesidad de código adicional. */
    /* El modo "middleware" permite que la salida generada se utilice como middleware para otro servidor Node.js, como Express.js o Fastify. */
    mode: "standalone", // "standalone" | "middleware"
  }),

  /* https://docs.astro.build/en/reference/configuration-reference/#env */
  /* astro tiene una forma sencilla de leer variables de entorno pudiendo agregarle un schema también y esto nos ayuda a validar los valores de las variables de entorno, es decir, poder tiparlo de cierta forma, porque al usar las variables de entorno al final de cuentas son strings (cadenas de texto) así se le coloquen entre comillas o no y luego se tendría que usar otras funciones o bibliotecas para transformarlo en el tipo que queremos pero con Astro ya lo podemos hacer con esta configuración */
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  /* https://docs.astro.build/en/guides/prefetch/ */
  // prefetch: true,
  prefetch: {
    defaultStrategy: "hover", // "hover" (default) | "tap" | "viewport" | "load"
    // prefetchAll: true // Opción para prefetch de todos los enlaces (carga más lenta inicial)
  },

  /* Si usas los alias en imports de Astro, agrega la configuración en "astro.config.mjs" pero hay que proporcionar opciones de configuración adicionales a Vite. Útil cuando Astro no admite alguna configuración avanzada que puedas necesitar. */
  /* https://vite.dev/config/ */
  vite: {
    /* https://vite.dev/config/shared-options#resolve-alias */
    resolve: {
      /* OPCIÓN 1: Esto concatena rutas sin separador, lo que puede causar problemas en Windows */
      // alias: {
      //   "@components": __dirname + "src/components",
      //   "@layouts": __dirname + "src/layouts",
      //   "@utils": __dirname + "src/utils",
      // },

      /* OPCIÓN 2: usar path.join para construir rutas correctamente */
      alias: {
        "@components": path.join(__dirname, "src/components"),
        "@layouts": path.join(__dirname, "src/layouts"),
        "@utils": path.join(__dirname, "src/utils"),
      },
    },

    plugins: [tailwindcss()],
  },
});
