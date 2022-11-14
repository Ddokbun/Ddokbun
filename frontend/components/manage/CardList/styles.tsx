import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.ul)`
  display: flex;
  justify-content: center;
  margin-left: 10%;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
