import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#53B6B1'
  },
  i18n: {
    locales: () => [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  head: {
    title: 'Larapex Charts',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  target: 'static',
})
