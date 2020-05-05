import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

export default class Document extends NextDocument<Props> {
  render() {
    return (
      //<Html {/* lang="ja" */}>
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
