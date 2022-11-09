import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.section)`
  margin: 5% auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  h2 {
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 24px;
    margin-bottom: 5%;
    
  }
`;
