import { motion } from "framer-motion";
import styled from "styled-components";

export const ResponsiveWrapper = styled(motion.div)`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 80px;

  overflow: hidden;

  .img-wrap {
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    aspect-ratio: 1 / 1;
  }

  .text-wrap {
    z-index: 1;
    background-color: #f7f7f7;
    padding: 15px 10px;
    width: 100%;
    height: 100%;
    gap: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h2 {
      margin-top: 5px;
      word-break: keep-all;
      font-size: 18px;
      font-family: ${props => props.theme.font.TitleFont};
      line-height: 18px;
    }
    h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: 15px;
      word-break: keep-all;
      width: 80px;
      text-align: right;
    }
    .title p {
      position: static;
      color: ${props => props.theme.color.mainGreen};
      line-height: 8px;
      font-size: 10px;
      word-break: keep-all;
    }
  }
  @media screen and (${props => props.theme.mobile}) {
    position: relative;

    .text-wrap {
      padding: 20px 10px;
      position: relative;
      gap: 5px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      h2 {
        word-break: keep-all;
        font-size: 13px;
        font-family: ${props => props.theme.font.TitleFont};
        line-height: 13px;
      }
      h3 {
        font-family: ${props => props.theme.font.EnglishFont};
        font-size: 15px;
        word-break: keep-all;
        width: 80px;
        text-align: right;
      }
      .title p {
        top: 5px;
        left: 10px;
        position: absolute;
        color: ${props => props.theme.color.mainGreen};
        line-height: 7px;
        font-size: 10px;
        word-break: keep-all;
      }
    }
  }
`;
