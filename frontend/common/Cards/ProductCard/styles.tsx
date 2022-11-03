import { motion } from "framer-motion";
import styled from "styled-components";

export const ResponsiveWrapper = styled(motion.div)`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 20px;
  width: 300px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  grid-gap: 5px;
  place-items: center;
  .img-wrap {
    padding: 0px 0px;
    width: 100%;
    height: 100%;

    position: relative;
    align-items: center;
  }

  .text-wrap {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: 25px;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      h2 {
        font-size: 25px;
        font-family: ${props => props.theme.font.TextFont2};
        letter-spacing: 0px;
        font-weight: 600;
        color: ${props => props.theme.color.darkGreen};
      }
      h3 {
        font-size: 14px;
        line-height: 10px;
        margin-bottom: 10px;
        color: ${props => props.theme.color.brownHover};
        font-family: ${props => props.theme.font.EnglishFont};
      }
    }
  }
  :hover {
    bottom: 2px;
  }
  @media screen and (${props => props.theme.mobile}) {
    padding: 0px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-gap: 5px;

    .img-wrap {
      padding: 0px 20px;
      width: 100%;
      max-width: 250px;
      position: relative;
      align-items: center;
    }

    .text-wrap {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      h3 {
        font-family: ${props => props.theme.font.EnglishFont};
        font-size: 1.8rem;
      }

      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          font-size: 2rem;
          font-family: ${props => props.theme.font.TextFont1};
          font-weight: 600;
          color: ${props => props.theme.color.darkGreen};
        }
        h3 {
          font-size: 1.5rem;
          line-height: 10px;
          margin-bottom: 10px;
          color: ${props => props.theme.color.brownHover};
          font-family: ${props => props.theme.font.EnglishFont};
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  place-items: center;
  .img-wrap {
    padding: 0px 20px;
    width: 100%;
    max-width: 250px;
    position: relative;
    align-items: center;
  }

  .text-wrap {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: 1.2rem;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 1.25rem;
        font-family: ${props => props.theme.font.TextFont1};
        font-weight: 600;
        color: ${props => props.theme.color.darkGreen};
      }
      h3 {
        font-size: 1.25rem;
        line-height: 10px;
        margin-bottom: 10px;
        color: ${props => props.theme.color.ivory};
        font-family: ${props => props.theme.font.EnglishFont};
      }
    }
  }
`;
