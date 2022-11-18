import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)<{ isDelivery: boolean }>`
  background-color: ${props => props.theme.color.darkGray};
  width: ${props => (props.isDelivery ? "90%" : "35%")};
  height: ${props => (props.isDelivery ? "80%" : "100%")};
  border-radius: 16px;
  margin: 2%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(1, 100%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  grid-gap: 10%;
  :hover {
    cursor: pointer;
  }

  .image-container {
    border-radius: 8px;
    display: flex;
  }
  .image {
    border-radius: 5%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .info > .krName {
    font-weight: bold;
    width: 100%;
    color: ${props => props.theme.color.black};
    font-family: ${props => props.theme.font.TextFont2};
  }

  .info > .egName {
    color: ${props => props.theme.color.brown};
    font-family: ${props => props.theme.font.EnglishFont};
  }

  .delivery {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0% 20% 10% 0%;
    color: ${props => props.theme.color.ivory};
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 100px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(1, 100px);
    grid-gap: 3%;

    .image-container {
      border-radius: 8px;
    }
    .image {
      border-radius: 5%;
    }

    .info {
      display: flex;
      flex-direction: column;
    }

    .info > .krName {
      font-weight: bold;
    }

    .info > .egName {
      /* color: ${props => props.theme.color.ivory}; */
    }
  }
`;
