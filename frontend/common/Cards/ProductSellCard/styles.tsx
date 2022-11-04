import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(100px + 25vw);
  grid-auto-flow: row;
  grid-gap: 50px;

  .img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 320px;
  }

  .text-wrap {
    padding: max(2vw, 20px) 0px;
    width: 100%;
    height: 100%;
    display: flex;

    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;

    gap: 20px;

    .tag-wrap {
      display: flex;
      gap: 5px;
    }
    .text-top {
      h2 {
        padding: 0px;
        font-size: min(5vw, 80px);
        margin: 0;
        color: ${props => props.theme.color.mainGreen};
        font-family: ${props => props.theme.font.TitleFont};
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h3 {
        font-size: min(3vw, 50px);
        white-space: nowrap;
        text-overflow: ellipsis;

        line-height: 0.5em;
        color: ${props => props.theme.color.brownHover};
      }
    }
    & > h3 {
      font-family: ${props => props.theme.font.EnglishFont};
      font-size: min(3vw, 80px);
    }
    .button-wrap {
      position: relative;
      display: flex;
      justify-content: flex-start;
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
