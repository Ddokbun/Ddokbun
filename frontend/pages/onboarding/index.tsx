import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Wrapper } from "./styles";
import MainContents from "../../components/Onboarding/MainContents";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <h1>온보딩</h1>
        <h1>Onboarding</h1>
      </Wrapper>
      <MainContents></MainContents>
    </div>
  );
};

export default Home;