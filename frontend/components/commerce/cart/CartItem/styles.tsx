import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;

  display: grid;
  grid-template-columns: 180px 1fr auto;
  grid-template-rows: 1fr;
  padding: 20px 0px;

  .grid-left {
    position: relative;
    transform: translateX(-15px);
  }

  .grid-center {
    position: relative;
    padding: 0px 0px;
    transform: translateX(-25px);
    h2 {
      font-size: 20px;
      font-family: ${props => props.theme.font.TitleFont};
      color: ${props => props.theme.color.black};
      line-height: 20px;
      word-break: keep-all;
      margin-bottom: 5px;
    }
    h3 {
      line-height: 12px;
      font-size: 10px;
      font-family: ${props => props.theme.font.TitleFont};
      color: ${props => props.theme.color.black};
    }
    .count {
      position: absolute;
      bottom: 5px;
      right: 5px;

      font-size: 18px;
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
      right: 0px;
      width: 15px;
      height: 15px;
      position: absolute;
      path {
        fill: ${props => props.theme.color.black};
      }
    }
    padding: 5px 30px 0px 0px;
    h2 {
      font-size: 20px;
      font-family: ${props => props.theme.font.EnglishFont};
      color: ${props => props.theme.color.black};
    }
  }

  @media screen and (max-width: 600px) {
    .grid-left {
      position: relative;
      transform: translateX(-30px);
    }
    .grid-center {
      transform: translateX(-40px);
      h2 {
        font-size: 18px;
        word-break: keep-all;
      }
      .count {
        position: absolute;
        bottom: 0px;
        right: 0px;

        .dhandler {
          font-size: 20px;

          cursor: pointer;
          z-index: 3;
        }
      }
    }
    .grid-right {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 5px 3px 0px 0px;
      h2 {
        font-size: 18px;
      }
    }
  }
`;
