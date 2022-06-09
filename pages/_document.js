import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
      <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Ian Webster</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" type="text/css"/>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;