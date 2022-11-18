import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0px 0px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  cursor: pointer;
  .grid-left {
    position: relative;
    .img-wrap {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .grid-right {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    height: 100%;

    h3 {
      font-size: 18px;
      position: static;
      word-break: keep-all;

      font-family: ${props => props.theme.font.EnglishFont};
    }

    p {
      word-break: keep-all;
      font-size: 12px;
      position: static;
      font-family: ${props => props.theme.font.TextFont2};
    }
  }
`;
