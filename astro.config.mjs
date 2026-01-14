// @ts-check
import { defineConfig, envField } from "astro/config";
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
  /* https://docs.astro.build/en/reference/configuration-reference/#env */
  /* astro tiene una forma sencilla de leer variables de entorno pudiendo agregarle un schema también y esto nos ayuda a validar los valores de las variables de entorno, es decir, poder tiparlo de cierta forma, porque al usar las variables de entorno al final de cuentas son strings (cadenas de texto) así se le coloquen entre comillas o no y luego se tendría que usar otras funciones o bibliotecas para transformarlo en el tipo que queremos pero con Astro ya lo podemos hacer con esta configuración */
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
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
