import "../styles/globals.css";
import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import GlobalStyle from "../styles/global-styles";
import { wrapper } from "../store";
import Navbar from "../common/Navbar/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

const DEFAULT_SEO = {
  title: "똑분 - Ddokbun",
  description: "스마트화분 판매 플랫폼 똑분 - Ddokbun",
  canonical: "https://www.ddokbun.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.ddokbun.com",
    title: "똑분 - Ddokbun에 방문해보세요!",
    description:
      "스마트화분 판매 플랫폼 똑분 - Ddokbun에 방문해서 나만의 식물을 추천받아보세요!",
    site_name: "똑분 - Ddokbun",
    images: [
      {
        url: "https://i.postimg.cc/rySCypg1/logo-04.png",
        width: 285,
        height: 167,
        alt: "스마트화분 커머스, 똑분(Ddokbun)에 방문해보세요!",
      },
    ],
  },
};

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(store);
  const router = useRouter();
  const isOnboarding = router.route.includes("welcome");
  const isAdmin = router.route.includes("admin");

  return (
    <>
      <Head>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"
          name="viewport"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DefaultSeo {...DEFAULT_SEO} />
          <ThemeProvider theme={Theme}>
            {!isOnboarding && !isAdmin && <Navbar />}
            <GlobalStyle />
            <Component {...props.pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
