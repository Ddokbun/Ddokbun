import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <NextSeo
          title="home"
          description="home description"
          canonical="https://example.com"
          openGraph={{
            url: "https://example.com",
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
};

export default Home;
