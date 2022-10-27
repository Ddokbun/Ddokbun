import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Black+Han+Sans&family=DM+Serif+Display&family=Prata&display=swap"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
        charSet="utf-8"
        async
      ></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.js"
        async
      ></script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
