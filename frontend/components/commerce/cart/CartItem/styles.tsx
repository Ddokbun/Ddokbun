import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  background-color: #fafafa;

  display: grid;
  grid-template-columns: 180px 1fr 150px;
  grid-template-rows: 1fr;
  grid-gap: 10px;

  .grid-left {
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
      top: 10px;
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
    padding: 10px 20px;
    h2 {
      font-size: 25px;
      font-family: ${props => props.theme.font.EnglishFont};
      color: ${props => props.theme.color.darkGreen};
    }
  }
  @media screen and (${props => props.theme.mobile}) {
    padding: 5px;
    display: flex;
    background-color: #fafafa;
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

        top: 110px;
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
