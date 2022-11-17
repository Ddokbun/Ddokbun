import { motion } from "framer-motion";
import styled from "styled-components";

export const FormWrapper = styled(motion.div)`
  width: 100%;
  margin: 20px 0px;
  .now {
    outline: 2px solid #e1b12c;
    background-color: ${props => props.theme.color.darkGray};
  }
  .form-wrap {
    margin: auto;
    width: 800px;
    padding-bottom: 50px;
    border-bottom: 2px solid ${props => props.theme.color.darkGray};
  }
  h1 {
    margin: 0px 0px;
    text-align: center;
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 30px;
    font-weight: 600;
  }

  .wrap {
    margin: 60px 0px 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .selector {
      cursor: pointer;
      border-radius: 4px;
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

  @media screen and (max-width: 900px) {
    .form-wrap {
      margin: auto;
      width: 100%;
      padding: 0px 20px 50px;
      border-bottom: 2px solid ${props => props.theme.color.darkGray};
    }
    h1 {
      margin: 0px 0px;
      text-align: center;
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 20px;
      font-weight: 600;
    }

    .wrap {
      margin: 60px 0px 30px;
      width: 100%;
      display: flex;
      justify-content: space-around;

      .selector {
        cursor: pointer;
        border-radius: 4px;
        text-align: center;
        word-break: keep-all;
        box-shadow: 2px 2px 3px 2px ${props => props.theme.color.darkGray};
        width: 120px;
        display: flex;
        padding: 10px 0px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-family: ${props => props.theme.font.TextFont2};

        :hover {
          background-color: ${props => props.theme.color.darkGray};
        }
      }
    }
  }
`;
