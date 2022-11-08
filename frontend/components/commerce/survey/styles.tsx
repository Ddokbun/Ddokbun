import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 50vw;
  height: 80vh;
  min-width: 700px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .dots {
    top: 10px;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .question {
    padding-left: 0;
    h1 {
      font-weight: 600;
      word-break: keep-all;
      font-size: 40px;
      font-family: ${props => props.theme.font.TextFont1};
    }
  }

  .answers {
    margin-left: auto;
    width: 30%;

    ul li {
      margin: 50px 0px;
      font-family: ${props => props.theme.font.TextFont1};
      font-size: 32px;
    }
  }
  .button-wrap {
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .button {
      font-family: ${props => props.theme.font.TextFont1};
      letter-spacing: 10px;
      font-size: 20px;
      padding: 10px 100px;
      border-radius: 5px;
      border: 3px solid ${props => props.theme.color.ivory};
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    padding: 15px;
    position: relative;
    width: 100%;
    min-width: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .button-wrap {
      align-self: center;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 50px;
      .button {
        font-family: ${props => props.theme.font.TextFont1};
        letter-spacing: 5px;
        font-size: 20px;
        padding: 10px 50px;
        border-radius: 5px;
        border: 3px solid ${props => props.theme.color.ivory};
      }
    }
  }
`;

export const FormWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  h1 {
    font-weight: 600;
    word-break: keep-all;
    font-size: 32px;
    font-family: ${props => props.theme.font.TextFont1};
  }
  ul {
    width: 40%;
    margin-left: auto;
  }

  ul li {
    margin: 50px 0px;
    font-family: ${props => props.theme.font.TextFont1};
    font-size: 24px;
  }
`;
