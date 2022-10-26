import "../styles/globals.css";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { wrapper } from "../store";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import GlobalStyle from "../styles/global-styles";
import Navbar from "../common/Navbar/index";
import { useRouter } from "next/router";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();
  const isOnboarding = router.route.includes("onboarding");
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        {!isOnboarding && <Navbar />}
        <GlobalStyle />
        <Component {...props.pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
