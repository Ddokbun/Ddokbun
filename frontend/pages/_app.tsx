import "../styles/globals.css";
import React, { FC, useEffect } from "react";
import cookies from "next-cookies";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import GlobalStyle from "../styles/global-styles";
import { wrapper } from "../store";
import Navbar from "../common/Navbar/index";
import "@fortawesome/fontawesome-svg-core/styles.css";

interface AppProps {
  ctx: string;
  Component: string;
}

const DEFAULT_SEO = {
  title: "똑분 - Ddokbun",
  description: "똑분 - Ddokbun",
  canonical: "https://www.ddokbun.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.ddokbun.com",
    title: "똑분 - Ddokbun에 방문해보세요!",
    site_name: "똑분 - Ddokbun",
    images: [
      {
        url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();
  const isOnboarding = router.route.includes("welcome");
  const isAdmin = router.route.includes("admin");

  return (
    <>
      <Provider store={store}>
        <DefaultSeo {...DEFAULT_SEO} />
        <ThemeProvider theme={Theme}>
          {!isOnboarding && !isAdmin && <Navbar />}
          <GlobalStyle />
          <Component {...props.pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = ctx => {
  const { token } = cookies(ctx);
  console.log(token);

  if (!token || token === "") {
    if (ctx.req && ctx.res) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else {
    }
  }

  return { token };
};

export default MyApp;
