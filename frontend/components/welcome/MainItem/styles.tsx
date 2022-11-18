import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  .banner-wrap {
    position: relative;
    .fill-img {
      height: 800px;
      position: "relative";
    }
    .title {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        text-align: center;
        font-size: 120px;
      }
      h2 {
        text-align: center;
        font-size: 32px;
        font-family: ${props => props.theme.font.TitleFont};
      }
    }
    .login-button {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .google-button {
      width: 350px;
      height: 50px;
      margin-bottom: 6px;
    }
  }
  .kakao-btn {
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px auto;
    /* padding: -10px; */
    color: transparent;
    width: 300px;
    height: 45px;
  }

  @media screen and (max-width: 600px) {
    .banner-wrap {
      position: relative;

      .title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
          text-align: center;
          font-size: 50px;
        }
        h2 {
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
`;
