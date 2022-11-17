import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3% auto;
  max-width: 1500px;
  width: 100%;
  background-color: "#fafafa";
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  grid-gap: 5%;
  h2 {
    font-family: ${props => props.theme.font.SubTitleFont};
    color: ${props => props.theme.color.black};
    font-size: 36px;
    padding: 4% 0% 0% 4%;
  }
  .title {
    color: ${props => props.theme.color.mainGreen};
    margin: 4%;
    display: flex;
    justify-content: center;
    margin-right: 10%;
  }

  @media screen and (${props => props.theme.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const LeftSection = styled.section`
  justify-content: center;
`;

export const RightSection = styled(motion.section)`
  box-shadow: rgba(0, 0, 0, 0.35) -5px 0px 5px -1px;
  background: linear-gradient(to right, #fffafa, #fafafa);
  /* background-color: #fffafa; */
  border-top-left-radius: 16px;
  min-height: 85vh;
  height: fit-content;

  h3 {
    font-family: ${props => props.theme.font.SubTitleFont};
    font-size: 24px;
    color: ${props => props.theme.color.black};
    padding-left: 4%;
    padding-top: 1%;
  }

  .image-container {
    display: flex;
    justify-content: space-between;
    margin: 3% 0% 0% 3%;
  }

  .text-container {
    flex-direction: column;
    width: 90%;
    h3,
    p {
      padding-left: 1%;
    }
  }

  .pointer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-right: 5%;
    color: ${props => props.theme.color.black};
    :hover {
      cursor: pointer;
    }
    .selected {
      color: ${props => props.theme.color.mainGreen};
    }
  }

  @-webkit-keyframes moveToLeft {
    from {
    }
    to {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes moveToLeft {
    from {
      -webkit-transform: translateX(20%);
    }
    to {
      transform: translateX(0);
    }
  }
  .moveToLeft {
    -webkit-animation: moveToLeft 1s ease both;
    animation: moveToLeft 1s ease both;
  }

  img {
    border-radius: 16px;
  }

  .line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10%;
    padding-bottom: 2%;
    border-bottom: 1px solid #ccc;
    word-break: keep-all;

    p {
      padding-left: 0%;
    }
  }

  .info {
    width: 60%;
  }

  p {
    font-family: ${props => props.theme.font.TextFont2};
    color: ${props => props.theme.color.black};
    padding-left: 4%;
  }

  .logs {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 500px;
    width: 95%;
    min-height: 580px;

    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }

    .line {
      margin-top: 10%;
    }

    p {
      font-family: ${props => props.theme.font.TextFont2};
      color: ${props => props.theme.color.black};
      padding-left: 4%;
    }

    .status-image-container {
      max-width: 50px;
    }
    .info {
      width: 75%;
    }
  }
`;
