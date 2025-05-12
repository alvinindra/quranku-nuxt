import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-toastify",
  ],
  fonts: {
    provider: "google",
    defaults: {
      weights: [400, 500, 600, 700, 800],
      styles: ["normal", "italic"],
      subsets: [
        "cyrillic-ext",
        "cyrillic",
        "greek-ext",
        "greek",
        "vietnamese",
        "latin-ext",
        "latin",
      ],
    },
    families: [
      { name: "Poppins", provider: "google" },
      {
        name: "Isep Misbah",
        provider: "none",
        src: "@/fonts/isep-misbah/IsepMisbah.ttf",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  srcDir: "src/",
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
})