import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.color.whiteGray};
  .contents-box {
    padding: 50px;
    margin: auto;
    height: auto;
    max-width: 1500px;

    h1 {
      font-size: 30px;
      margin-bottom: 50px;
      color: ${props => props.theme.color.black};
      font-family: ${props => props.theme.font.TextFont2};
    }

    .grid {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      .cards {
        width: 100%;
        grid-column: span 2;
        :nth-child(4) {
          grid-column: 2 / span 2;
        }
      }
    }

    .button {
      margin: 30px auto;
      padding: 0px 0px;
      height: 60px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.color.darkGreen};
      color: ${props => props.theme.color.whiteGray};
      font-size: 20px;
      border-radius: 5px;
      transition: all ease-out 0.1s;
      cursor: pointer;
      :hover {
        font-size: 24px;
        background-color: ${props => props.theme.color.mainGreen};
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    .contents-box {
      padding: 50px 10px;

      h1 {
        font-size: 20px;
        margin-bottom: 20px;
      }

      .grid {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        grid-row-gap: 0px;
        .cards {
          width: 100%;
          grid-column: span 2;
          :nth-child(4) {
            grid-row: 1 / 2;
            grid-column: 1 / span 2;
          }
          :nth-child(5) {
            grid-column: 2 / span 2;
          }
        }
      }
    }
  }
`;
