import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.li)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 200px 170px 60px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: ${props => props.theme.color.darkGray};
  font-family: ${props => props.theme.font.TextFont2};
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  justify-content: center;
  margin: 3%;

  :hover {
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }

  .card-image {
    grid-area: image;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
  }
  .card-text {
    grid-area: text;
    margin: 25px;

    p {
      color: grey;
      font-size: 15px;
      font-weight: 300;
      font-family: ${props => props.theme.font.TextFont2};
    }
    h2 {
      margin: 0px;
      font-size: 28px;
      font-family: ${props => props.theme.font.SubTitleFont};
      color: ${props => props.theme.color.black};
    }
    .date {
      color: ${props => props.theme.color.brown};
    }
  }

  .card-stats {
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${props => props.theme.color.brownHover};
    color: ${props => props.theme.color.darkGray};

    .stat {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: white;
      padding: 10px;
      .middle {
        border-left: 1px solid;
        border-right: 1px solid;
      }
      p {
        font-family: ${props => props.theme.font.TextFont2};
      }
    }
  }

  .button-container {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.color.darkGreen};

    button:hover {
      color: ${props => props.theme.color.mainGreen};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 160px;
    grid-template-rows: 100px 100px 40px;
    margin: 5% 3% 3%;

    .card-text {
      margin: 3px;

      p {
        color: grey;
        font-size: 12px;
      }
      h2 {
        margin: 0px;
        font-size: 18px;
        font-family: ${props => props.theme.font.SubTitleFont};
        color: ${props => props.theme.color.black};
      }
    }
    .card-stats {
      .stat {
        font-size: 10px;
        padding: 0px;
        p {
          padding: 0px;
        }
        .middle {
          border-left: 1px solid;
          border-right: 1px solid;
        }
      }
    }

    .button-container {
      margin-top: 2%;
      color: ${props => props.theme.color.darkGreen};
      font-size: 12px;
      button:hover {
        color: ${props => props.theme.color.mainGreen};
        font-weight: bold;
      }
    }
  }
`;
