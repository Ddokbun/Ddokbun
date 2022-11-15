import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.section)`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  position: relative;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.black};

  h1 {
    color: ${props => props.theme.color.darkGreen};
    font-size: 36px;
    font-family: ${props => props.theme.font.TitleFont};
  }

  .add-btn-container {
    position: absolute;
    bottom: 1%;
    right: 2%;
    font-family: ${props => props.theme.font.TextFont2};
  }

  @media screen and (max-width: 600px) {
    * {
      width: 98%;
      padding-left: 3%;
      display: flex;
      justify-content: space-between;
      height: 50%;
    }
    .add-btn-container {
      display: flex;
      position: relative;
      align-items: flex-end;
      justify-content: flex-end;
      width: 200px;
    }
  }
`;
