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
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1388720052862525444/6Ge2RLYf_400x400.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
    ],
  },
  // twitter: {
  //   handle: '@hogehoge',
  //   site: '@fugafuga',
  //   cardType: 'summary_large_image',
  // },
}

export default next_seo_config
