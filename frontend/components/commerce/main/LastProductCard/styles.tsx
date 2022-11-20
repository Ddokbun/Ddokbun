import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled(motion.div)`
  color: #000000;
  margin-bottom: 50px;
  width: 100%;
  h2 {
    margin-left: 7px;
    font-size: 50px;
  }
  .item-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
    .item-wrapper {
      display: block;
    }
  }
`;
