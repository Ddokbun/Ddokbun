import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 30px;

  .img-wrap {
    position: relative;
    padding: 20px;
    width: 100%;
    height: 100%;
    min-width: 320px;
    aspect-ratio: 1/ 1;
  }

  .text-wrap {
    position: relative;
    width: 100%;
    margin: auto 0px 0px;
    height: 90%;
    display: flex;
    /* padding-top: min(5vw, 100px); */
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    .tag-wrap {
      margin: auto 0px 0px;
      display: flex;
      gap: 10px;
    }
    .text-top {
      h2 {
        padding: 0px;
        font-size: min(4vw, 50px);
        line-height: 50px;
        word-break: keep-all;
        margin: 10px 0px 0px;
        color: ${props => props.theme.color.black};
        font-family: ${props => props.theme.font.TitleFont};
        margin-bottom: 10px;
      }
      h3 {
        border-bottom: 2px solid ${props => props.theme.color.ivory};
        font-size: min(2vw, 30px);
        margin-bottom: 20px;
        padding-bottom: 0px;
        color: ${props => props.theme.color.black};
      }
    }
    & > h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: min(3vw, 50px);
    }
    .button-wrap {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto;
      gap: 10px;
      z-index: 0;
    }
  }

  @media screen and (${props => props.theme.tablet}) {
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 100%;
    height: 100%;
    padding: 0px 0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px;
    grid-auto-flow: row;
    grid-gap: 0px;
    place-items: end;

    .text-wrap {
      margin-top: 60px;
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: center;

      flex-direction: column;
      align-self: start;

      gap: 0px;

      .text-top {
        h2 {
          padding: 0px;
          font-size: 60px;
          margin-bottom: 0px;
          color: ${props => props.theme.color.mainGreen};
          font-family: ${props => props.theme.font.TitleFont};
        }
        h3 {
          font-size: 30px;
          line-height: 10px;
          color: ${props => props.theme.color.brownHover};
        }
      }
      & > h3 {
        font-family: ${props => props.theme.font.EnglishFont};
        font-size: 50px;
        margin-top: 20px;
      }
      .button-wrap {
        z-index: 1;
        position: fixed;
        transform: translate(-50%, 0%);
        bottom: 20px;
        margin-top: 20px;
        left: 50%;
        display: flex;
        justify-content: flex-start;
        gap: 10px;
      }
    }
  }
`;
