import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html>
    <Head>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta
        name="naver-site-verification"
        content="dcc1baf4f88a927d4f1b9d8e02e127e25357e300"
      />
      <meta
        name="google-site-verification"
        content="TX_UfTDiWfdrhQQgBw8r8aHU0Krb2_foLRN6GowEBCw"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Black+Han+Sans&family=DM+Serif+Display&family=Prata&display=swap"
        rel="stylesheet"
      />
      <link rel="manifest" href="manifest.json" />
      <Script
        type="text/javascript"
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
        charSet="utf-8"
        async
      ></Script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <script src="https://developers.kakao.com/sdk/js/kakao.js" async></script>
      <script type="module">
        import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate'; const el =
        document.createElement('pwa-update'); document.body.appendChild(el);
      </script>
    </Head>
    <body>
      <Main />
      <NextScript />
      <div id="modal-root"></div>
    </body>
  </Html>
);

export default Document;
