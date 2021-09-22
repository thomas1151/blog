import Head from 'next/head'
import { DESCRIPTION, CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#03A9F4"/>
      <meta name="msapplication-TileColor" content="#03A9F4"/>
      <meta name="theme-color" content="#03A9F4"/>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={DESCRIPTION}
      />
    </Head>
  )
}
