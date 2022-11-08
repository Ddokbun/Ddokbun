import { motion } from "framer-motion";
import styled from "styled-components";

export const ResponsiveWrapper = styled(motion.div)`
  cursor: pointer;
  margin-top: 20px;
  width: 350px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr auto;
  grid-gap: 15px;

  .img-wrap {
    border-radius: 10px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    aspect-ratio: 1 / 1;
  }

  .text-wrap {
    padding: 0px 10px;
    width: 100%;
    height: 100%;
    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: 20px;
      word-wrap: normal;
    }
    .text-wrap-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      h2 {
        font-size: 20px;
        font-family: ${props => props.theme.font.TextFont2};
        letter-spacing: 0px;
        line-height: 15px;
        font-weight: 600;
        line-height: 10px;
        color: ${props => props.theme.color.darkGreen};
        margin-bottom: 10px;
      }
      h3 {
        font-size: 14px;
        color: ${props => props.theme.color.brownHover};
        font-family: ${props => props.theme.font.EnglishFont};
      }
    }
    .tag-wrap {
      display: flex;
      gap: 5px;
    }
  }
  :hover {
    bottom: 2px;
  }
  @media screen and (${props => props.theme.mobile}) {
    width: 100%;
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
      overflow: hidden;
      border-radius: 25px;
    }

    .text-wrap {
      padding-left: 10px;
      margin-top: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 10px;

      h3 {
        font-family: ${props => props.theme.font.EnglishFont};
        font-size: 25px;
      }

      .text-wrap-bottom {
        padding-left: 5px;
        padding-bottom: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        justify-self: baselines;
      }
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        h2 {
          font-size: 22px;
          font-family: ${props => props.theme.font.TextFont2};
          letter-spacing: 0px;
          font-weight: 600;
          color: ${props => props.theme.color.darkGreen};
          white-space: nowrap;
          word-wrap: normal;
        }
        h3 {
          font-size: 12px;
          line-height: 18px;
          color: ${props => props.theme.color.brownHover};
          font-family: ${props => props.theme.font.EnglishFont};
        }
      }
    }
  }
`;

export const Wrapper = styled(motion.div)`
  @media not all and (min-resolution: 0.001dpcm) {
    img[loading="lazy"] {
      clip-path: inset(0.5px);
    }
  }

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  place-items: center;
  z-index: 1;
  .img-wrap {
    padding: 0px 20px;
    width: 100%;
    height: 100%;
    max-width: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 25px;
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
    .tag-wrap {
      display: flex;
      gap: 5px;
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
        font-size: 13px;
        line-height: 10px;
        margin-bottom: 10px;
        color: ${props => props.theme.color.brownHover};
        font-family: ${props => props.theme.font.EnglishFont};
      }
    }
  }
`;
