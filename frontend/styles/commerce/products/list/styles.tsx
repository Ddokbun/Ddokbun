import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;

  .banner-wrap {
    backgroud-color: #fafafa;
    z-index: 0;
    margin: 0 auto;
    padding: 50px 50px 0px;
    width: 100%;
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    .baener-text {
      width: 100%;
      positaion: relative;
      margin: auto 0px;
      padding: 40px 30px 10px 20px;

      span {
        font-size: 10px;
      }
      h3 {
        margin: 40px 0 25px;
        font-size: 40px;
        line-height: 50px;
      }

      p {
        word-break: keep-all;
        margin: 15px 20px 0px 0px;
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 20px;
      }

      .line {
        width: 60px;
        height: 2px;
        background-color: ${props => props.theme.color.ivory};
      }
    }
    .baener-image {
      display: flex;
      align-items: end;
      transform: translateY(35px);
      padding: 0px 30px;
    }
  }
  @media screen and (${props => props.theme.tablet}) {
    .banner-wrap {
      margin: 0 auto;
      padding: 50px 40px 0px;

      .baener-text {
        margin: auto 0px;
        padding: 30px 30px 5px 10px;

        h3 {
          margin: 30px 0 15px;
          font-size: 35px;
          line-height: 40px;
        }

        p {
          word-break: keep-all;
          margin: 10px 15px 0px 0px;
          font-size: 18px;
        }
      }
      .baener-image {
        display: flex;
        align-items: end;
        padding: 0px 0px;
      }
    }
  }
  @media screen and (${props => props.theme.mobile}) {
    .banner-wrap {
      margin: 0 auto;
      padding: 0px 5px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      .baener-text {
        width: 100%;
        positaion: relative;
        margin: auto 0px;
        padding: 0px 15px 0px;

        .line {
          width: 60px;
          height: 2px;
          background-color: ${props => props.theme.color.ivory};
        }
      }
      .baener-image {
        display: flex;
        align-items: start;
        transform: translateY(0px);
        padding: 0px 15px;
      }
    }
  }
`;
