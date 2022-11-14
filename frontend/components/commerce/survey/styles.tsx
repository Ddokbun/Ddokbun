import { motion } from "framer-motion";
import styled from "styled-components";

export const FormWrapper = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4fr 50px;
  padding: 0px 5% 5%;
  gap: 5%;
  width: 100%;

  .button-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;

    .button {
      font-family: ${props => props.theme.font.TextFont1};
      letter-spacing: 10px;
      font-size: 20px;
      padding: 0px 30px;
      border-radius: 5px;
      border: 3px solid ${props => props.theme.color.ivory};
    }
  }

  h1 {
    font-weight: 600;
    word-break: keep-all;
    font-size: min(40px, 3.5vw);
    font-family: ${props => props.theme.font.TextFont1};
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    margin-left: auto;
  }

  ul li {
    font-family: ${props => props.theme.font.TextFont1};
    font-size: min(30px, 3vw);
  }
  @media screen and (max-width: 600px) {
    position: relative;

    grid-template-columns: 1fr;
    grid-template-rows: auto 4fr 50px;
    padding: 0px 5% 5%;
    gap: 1%;

    .button-wrap {
      align-self: center;
      width: 100%;
      display: flex;

      .button {
        font-family: ${props => props.theme.font.TextFont1};
        letter-spacing: 5px;
        font-size: 20px;
        padding: 10px 50px;
        border-radius: 5px;
        border: 3px solid ${props => props.theme.color.ivory};
      }
    }

    h1 {
      font-weight: 600;
      word-break: keep-all;
      font-size: 35px;
      font-family: ${props => props.theme.font.TextFont1};
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 40%;
      margin-left: auto;
    }

    ul li {
      position: relative;
      font-family: ${props => props.theme.font.TextFont1};
      font-size: 30px;
    }
  }
`;

export const Svg = styled.svg`
  position: absolute;
  stroke-linecap: round;
  transform: translate(-50px, -5px);
  height: 50px;
  width: 50px;

  fill: none;
  stroke: #ffffff;
  stroke-width: 4px;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  stroke-dasharray: 60;
  /* @keyframes dash {
    from {
      stroke-dashoffset: 60;
    }
    to {
      stroke-dashoffset: 0;
    }
  } */
  .st1 {
    stroke: #000000;
    stroke-width: 10;

    animation: dash 1s linear alternate 1;
  }
`;
