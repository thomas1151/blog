import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>      
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&family=Playfair+Display:wght@400;900&display=swap" rel="stylesheet"/>
          
          <link rel="manifest" href="/manifest.webmanifest"/>
        </Head>
      
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      )
    }
  }
  