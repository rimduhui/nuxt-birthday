module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '슬아 생축',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '슬아 생일선물 대작전' },
      { property: 'og:title', cotent: '슬아 생일선물 대작전' },
      { property: 'og:description', cotent: '슬아에게 그동한 못한 말들을 생일 선물로 주세요!' },
      { property: 'og:image', cotent: '~/assets/img/seula_duhui.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
