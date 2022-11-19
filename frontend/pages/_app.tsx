import "../styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import GlobalStyle from "../styles/global-styles";
import { wrapper } from "../store";
import Navbar from "../common/Navbar/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import firebase from "firebase";
import { getToken, setToken } from "../apis/firebase";
import type { AppContext } from "next/dist/pages/_app";
import Footer from "../common/Footer/index";

const firebaseConfig = {
  apiKey: "AIzaSyCwdWKZo4h03IqLGmInSPIsDtArvtIJzpA",
  authDomain: "ddokbun-89ed0.firebaseapp.com",
  projectId: "ddokbun-89ed0",
  storageBucket: "ddokbun-89ed0.appspot.com",
  messagingSenderId: "977818145024",
  appId: "1:977818145024:web:4b33968439dff5cd1063e5",
  measurementId: "G-PZ8KF65XZ7",
};

const MyApp = ({ Component, ...rest }: AppProps) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  useEffect(() => {
    const getMessageToken = async () => {
      const request = await Notification.requestPermission();
      if (request === "granted") {
        const token = await getToken();
        await setToken(token);

        // const messaging = firebase.messaging();

        // messaging.onMessage((payload: any) => {
        //   const notificationTitle = payload.notification.title;
        //   const notificationOptions = {
        //     body: payload.notification.body,
        //     icon: "/icon.png",
        //   };

        //   console.log(payload, "포어그라운드");

        //   const notif = new Notification(
        //     notificationTitle,
        //     notificationOptions,
        //   );
        // });
      }
    };
    getMessageToken();
  }, []);

  const { store, props } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(store);
  const router = useRouter();
  const isOnboarding = router.route.includes("welcome");
  const isAdmin = router.route.includes("admin");
  const isMyPlant = router.route.includes("myplant");

  return (
    <>
      <Head>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DefaultSeo {...SEO} />
          <ThemeProvider theme={Theme}>
            {!isOnboarding && !isAdmin && <Navbar />}
            <GlobalStyle />
            <Component {...props.pageProps} />
            {!isMyPlant && <Footer />}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
