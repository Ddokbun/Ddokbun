import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .contents-box {
    width: 100%;
    margin: auto;
    max-width: 1200px;
  }

  .description {
    margin: 50px 0px 0px;
    padding: 0px 40px;
    width: 100%;
    margin-bottom: 60px;
    word-break: keep-all;

    h1 {
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 40px;
      margin-bottom: 30px;
    }
    p {
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 20px;
      word-break: keep-all;
    }
    .flex {
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }
    .plant-growth {
      max-width: 1000px;
      padding: 50px 30px;
      width: 100%;
      margin: 50px auto;
      h3 {
        font-family: ${props => props.theme.font.TitleFont};
        font-size: 18px;
        margin-bottom: 5px;
        word-break: keep-all;
      }
      p {
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 14px;
        word-break: keep-all;
      }
      border-radius: 10px;
      background-color: ${props => props.theme.color.darkGray};
      .plant-grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        .col {
          display: grid;
          grid-template-columns: 50px 1fr;
          grid-template-rows: 1fr;
          grid-gap: 20px;
          width: 100%;
          height: 100%;

          .content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 35px;
            grid-auto: row;
          }

          .imgwrap {
            position: relative;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      padding: 0px 10px;

      h1 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
      }

      .plant-growth {
        padding: 50px 30px;
        width: 100%;
        .plant-grid {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          .col {
            grid-gap: 20px;
          }
        }
      }
    }
  }
`;
