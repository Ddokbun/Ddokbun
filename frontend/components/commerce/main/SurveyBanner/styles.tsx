import styled from "styled-components";
import { motion } from "framer-motion";
export const Wrapper = styled(motion.div)`
  background-color: ${props => props.theme.color.black};
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  .img-wrap {
    width: 100%;
    height: 300px;
    position: relative;
  }
  .font-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding-right: 50px;
    h2 {
      font-size: 30px;
      font-family: ${props => props.theme.font.TitleFont};
    }
    margin-bottom: 50px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-wrap {
    margin-top: 20px;
    font-family: ${props => props.theme.font.TextFont2};
    border: 1px solid ${props => props.theme.color.whiteGray};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 600px) {
    .img-wrap {
      width: 100%;
      height: 200px;
      position: relative;
    }
    .font-wrap {
      background: linear-gradient(
        70deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 70%
      );
      justify-content: center;
      padding-right: 0px;
      margin-bottom: 60px;
      h2 {
        font-size: 25px;
      }
    }

    .button-wrap {
      text-align: center;
      width: 150px;
      height: 40px;
      font-size: 13px;
      border-radius: 3px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
