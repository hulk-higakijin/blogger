const next_seo_config = {
  titleTemplate: '%s | higakijin-blogger',
  defaultTitle: 'higakijin-blogger',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'higakijin',
    },
    {
      name: 'application-name',
      content: 'higakijin-blogger',
    },
  ],
  openGraph: {
    url: 'https://higakijin-blogger.vercel.app',
    type: 'website',
    locale: 'ja_JP',
    site_name: 'higakijin-blogger',
  },
  // twitter: {
  //   handle: '@hogehoge',
  //   site: '@fugafuga',
  //   cardType: 'summary_large_image',
  // },
}

export default next_seo_config
