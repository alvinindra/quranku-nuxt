// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    "no-console": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/anyno-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
})
