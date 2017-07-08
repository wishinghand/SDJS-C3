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
      { hid: 'description', content: "First Community Code Challenge by SanDiego.js" },
      { name: 'description', content: '' },
      { property: 'og:title', content: 'Community Code Challenge 2017 – Sept 15, 2017 in San Diego' },
      { property: 'og:site_name', content: 'Community Code Challenge 2017 – Sept 15, 2017 in San Diego' },
      { property: 'og:url', content: 'http://botchallenge.sandiegojs.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'First Community Code Challenge by SanDiego.js.' },
      { property: 'og:image', content: 'img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@sandiegojs' },
      { property: 'twitter:image', content: 'http://botchallenge.sandiegojs.org/img/cover.png' },
      { property: 'twitter:title', content: 'Community Code Challenge 2017 – Sept 15, 2017 in San Diego' },
      { property: 'twitter:description', content: 'First Community Code Challenge by SanDiego.js.' },
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
