import styled from "styled-components";
import { motion } from "framer-motion";

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

  .card-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40%);
    width: 100%;
  }

  .button-container {
    display: flex;
    height: 64px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    border-bottom: 2px solid;
    border-bottom-color: ${props => props.theme.color.darkGreen};
    padding: 10px;
  }
  td {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    .card-container {
      grid-template-columns: repeat(1, 80%);
    }
    .button-container {
      text-align: center;
      height: 55px;
    }
    table {
      width: 100%;
    }
    th {
      font-size: 16px;
      padding: 5px;
      word-break: keep-all;
      :nth-child(2) {
        display: none;
      }
    }
    td {
      :nth-child(3) {
        display: none;
      }
    }
    .info {
      text-align: left;
      word-break: keep-all;
      padding-left: 5%;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  border-width: 1px;
  border-color: ${props => props.theme.color.black};
`;
