import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  border-color: ${props => props.theme.color.brown};
  width: 90%;
  border-width: 3px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 10%;

  .btnContainer {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
  .image {
    display: flex;
    justify-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  .image:hover {
    cursor: pointer;
  }
  h2 {
    color: ${props => props.theme.color.brown};
    font-weight: bold;
    font-size: 28px;
    margin: 6%;
    font-family: ${props => props.theme.font.TextFont2};
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    display: flex;
  }
`;
