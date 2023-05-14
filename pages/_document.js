import { Html, Head, Main, NextScript } from 'next/document';

import Favicon from '../components/Favicon';

const Document = () => {
  return (
    <Html>
      <Head>
        <Favicon />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=optional"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
