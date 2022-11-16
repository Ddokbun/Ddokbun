import { motion } from "framer-motion";
import styled from "styled-components";

export const FormWrapper = styled(motion.div)`
  width: 100%;

  .form-wrap {
    margin: auto;
    width: 800px;
    padding-bottom: 50px;
    border-bottom: 2px solid ${props => props.theme.color.darkGray};
  }
  h1 {
    margin-top: 50px;
    text-align: center;
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 30px;
    font-weight: 600;
  }

  .wrap {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .selector {
      text-align: center;
      word-break: keep-all;
      box-shadow: 2px 2px 3px 2px ${props => props.theme.color.darkGray};
      width: 150px;
      display: flex;
      padding: 20px 0px;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-family: ${props => props.theme.font.TextFont2};

      :hover {
        background-color: ${props => props.theme.color.darkGray};
      }
    }
  }
`;
