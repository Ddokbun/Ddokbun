import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  background-color: ${props => props.theme.color.whiteGray};
  width: 100%;
  .contents-box {
    margin: auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
    gap: 35px;
  }
  /* align-items: center; */

  @media screen and (max-width: 600px) {
    gap: 0px;
    padding: 0 20px;
  }
`;
