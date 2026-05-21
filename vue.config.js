const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: "https://scontent-jnb1-1.cdninstagram.com/",
    allowedHosts: "all",
    port: 8080,
  },
  css: {
    loaderOptions: {
      // Auto-inject responsive mixins into every component's <style lang="scss">
      // so @include mobile / landscape / landscape_hd work without manual imports.
      sass: {
        additionalData: `@use "@/styles/mixins" as *;`,
      },
      scss: {
        additionalData: `@use "@/styles/mixins" as *;`,
      },
    },
  },
});
