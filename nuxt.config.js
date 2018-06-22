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
      { property: 'fb:app_id', content: '204228190210240' },
      { property: 'og:url', content: 'http://bit.ly/2lpdN4v' },
      { property: 'og:title', content: '슬아 생일선물 대작전' },
      { property: 'og:image', content: 'https://png.pngtree.com/element_origin_min_pic/16/11/24/3f4a9b121c5769d1103ace681669b914.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: '그동안 슬아에게 못한 말을 생일선물로 주세요.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
