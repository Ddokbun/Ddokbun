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
    margin-top: 5%;
  }
`;

export const ModalWrapper = styled.div`
  font-family: ${props => props.theme.font.TextFont2};
  .img-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    padding-bottom: 10px;
  }
  .text-wrapper {
    margin-top: 10px;
  }
`;
