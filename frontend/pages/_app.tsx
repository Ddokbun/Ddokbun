import "../styles/globals.css";
import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import GlobalStyle from "../styles/global-styles";
import { persistor, wrapper } from "../store";
import Navbar from "../common/Navbar/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import firebase from "firebase";
import { getToken } from "../apis/firebase";

// const DEFAULT_SEO = {
//   title: "똑분 - Ddokbun",
//   description: "스마트화분 판매 플랫폼 똑분 - Ddokbun",
//   canonical: "https://www.ddokbun.com",
//   openGraph: {
//     type: "website",
//     locale: "ko_KR",
//     url: "https://www.ddokbun.com",
//     title: "똑분 - Ddokbun에 방문해보세요!",
//     description:
//       "스마트화분 판매 플랫폼 똑분 - Ddokbun에 방문해서 나만의 식물을 추천받아보세요!",
//     site_name: "똑분 - Ddokbun",
//     images: [
//       {
//         url: "https://i.postimg.cc/rySCypg1/logo-04.png",
//         width: 285,
//         height: 167,
//         alt: "스마트화분 커머스, 똑분(Ddokbun)에 방문해보세요!",
//       },
//     ],
//   },
// };

const firebaseConfig = {
  apiKey: "AIzaSyCwdWKZo4h03IqLGmInSPIsDtArvtIJzpA",
  authDomain: "ddokbun-89ed0.firebaseapp.com",
  projectId: "ddokbun-89ed0",
  storageBucket: "ddokbun-89ed0.appspot.com",
  messagingSenderId: "977818145024",
  appId: "1:977818145024:web:4b33968439dff5cd1063e5",
  measurementId: "G-PZ8KF65XZ7",
};

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  useEffect(() => {
    const getMessageToken = async () => {
      const request = await Notification.requestPermission();
      if (request === "granted") {
        const token = await getToken();
        const messaging = firebase.messaging();

        messaging.onMessage(payload => {
          const notificationTitle = payload.notification.title;
          const notificationOptions = {
            body: payload.notification.body,
            icon: "/icon.png",
          };

          console.log(payload, "포어그라운드");

          const notif = new Notification(
            notificationTitle,
            notificationOptions,
          );
        });
        console.log(token, "토큰토큰");
      }
    };
    getMessageToken();
  }, []);

  const { store, props } = wrapper.useWrappedStore(rest);
  // const persistor = persistStore(store);
  const router = useRouter();
  const isOnboarding = router.route.includes("welcome");
  const isAdmin = router.route.includes("admin");

  return (
    <>
      <Head>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="minimum-scale=1.0, width=device-width, maximum-scale=1, use r-scalable=no"
          name="viewport"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DefaultSeo {...SEO} />
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
