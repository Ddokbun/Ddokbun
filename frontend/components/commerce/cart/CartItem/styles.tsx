import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  background-color: #fafafa;

  display: grid;
  grid-template-columns: 180px 1fr 200px;
  grid-template-rows: 1fr;
  grid-gap: 10px;

  .grid-left {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-center {
    position: relative;
    padding: 10px 20px;
    h2 {
      font-size: 30px;
      font-family: ${props => props.theme.font.TitleFont};
      color: ${props => props.theme.color.darkGreen};
    }
    .count {
      position: absolute;
      bottom: 10px;
      right: 10px;

      font-size: 19px;
      font-weight: 600;
      display: flex;
      gap: 8px;

      .handler {
        cursor: pointer;
      }
    }
  }
  .grid-right {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    svg {
      top: -5px;
      right: -10px;
      width: 25px;
      height: 25px;
      position: absolute;
      path {
        fill: ${props => props.theme.color.darkGreen};
      }
    }
    padding: 5px 20px 0px 0px;
    h2 {
      font-size: 35px;
      font-family: ${props => props.theme.font.EnglishFont};
      color: ${props => props.theme.color.darkGreen};
    }
  }
  @media screen and (${props => props.theme.tablet}) {
    padding: 5px;
    display: flex;
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-rows: 100px auto;
    grid-gap: 10px;
    position: relative;
    .grid-left {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 1/ 3/ 2;
    }

    .grid-center {
      position: relative;
      padding: 20px 10px;
      h2 {
        font-size: 30px;
        font-family: ${props => props.theme.font.TitleFont};
        color: ${props => props.theme.color.darkGreen};
      }
      .count {
        position: absolute;
        height: 20px;
        left: 10px;

        top: 60px;
        font-size: 19px;
        font-weight: 600;
        display: flex;
        gap: 8px;

        .handler {
          cursor: pointer;
        }
      }
    }
    .grid-right {
      display: flex;
      justify-content: flex-end;
      svg {
        cursor: pointer;
        top: -100px;
        right: 0px;
        width: 25px;
        height: 25px;
        position: absolute;
        path {
          fill: ${props => props.theme.color.darkGreen};
        }
      }
      position: absolute;
      grid-area: 2 / 2 / 3 / 3;
      padding: 10px 20px;
      bottom: 10px;
      right: 10px;
      h2 {
        font-size: 25px;
        font-family: ${props => props.theme.font.EnglishFont};
        color: ${props => props.theme.color.darkGreen};
      }
    }
  }
`;
