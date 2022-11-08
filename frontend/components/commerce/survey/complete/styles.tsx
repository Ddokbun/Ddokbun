import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80vh;
  max-width: 1100px;

  aspect-ratio: 12 /12;

  .contents-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  h1 {
    color: ${props => props.theme.color.ivoryHover};
    font-size: 60px;
    font-weight: 600;
  }
`;

export const GridWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 2fr);
`;
