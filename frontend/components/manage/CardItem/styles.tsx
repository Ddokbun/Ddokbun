import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  border-radius: 16px;
  .image {
    border-radius: 16px;
    :hover {
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 2%;
    position: relative;
    width: 250px;
    h2 {
      color: ${props => props.theme.color.black};
      font-family: ${props => props.theme.font.SubTitleFont};
    }
    h3 {
      font-family: ${props => props.theme.font.TextFont2};
      color: ${props => props.theme.color.black};
    }
    p {
      color: ${props => props.theme.color.black};
      font-family: ${props => props.theme.font.TextFont2};
    }
    button {
      position: absolute;
      bottom: 5%;
      right: 5%;
      font-family: ${props => props.theme.font.TextFont2};
      color: ${props => props.theme.color.darkGreen};
    }
    button:hover {
      color: ${props => props.theme.color.mainGreen};
    }
  }
`;
