module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData:
            `
              @import "@/styles/main.scss";
            `
      }
    }
  }
}
