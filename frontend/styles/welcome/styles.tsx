import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  word-break: keep-all;
  margin: 0 auto;
  width: 100%;
  background-color: "#ac2626";
  div {
    scroll-snap-type: y mandatory;
  }
`;
