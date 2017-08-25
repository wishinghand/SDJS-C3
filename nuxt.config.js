module.exports = {
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: "A SDJS sponsored Community Code Challenge event on September 16th, 2017" },
      { name: 'description', content: 'A SDJS sponsored Community Code Challenge event on September 16th, 2017' },
      { property: 'og:title', content: 'SDJS Community Code Challenge - Sept 16, 2017' },
      { property: 'og:site_name', content: 'SDJS Community Code Challenge - Sept 16, 2017' },
      { property: 'og:url', content: 'https://botchallenge.sandiegojs.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'A SDJS sponsored Community Code Challenge event on September 16th, 2017' },
      { property: 'og:image', content: 'img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@sandiegojs' },
      { property: 'twitter:image', content: 'https://botchallenge.sandiegojs.org/img/cover.png' },
      { property: 'twitter:title', content: 'SDJS Community Code Challenge – Sept 16, 2017' },
      { property: 'twitter:description', content: 'The 1st SDJS Community Code Challenge - Sept 16, 2017' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#1884c3' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-48.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext' },
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1884c3' },
  plugins: [
    '~plugins/analytics',
    '~plugins/cookies'
  ]
}
