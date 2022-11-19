import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.mainGreen};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .subcontent-wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .flex-position {
      width: 100%;
    }
    .title {
      margin-top: 50px;
      padding-right: 40px;
      h2 {
        text-align: end;
        font-size: 70px;
      }
      h3 {
        text-align: end;
        font-size: 25px;
        font-family: ${props => props.theme.font.TitleFont};
      }
    }
    .pot-flex {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pot-img {
      width: 100%;
      margin: 10px;
      position: relative;
    }
    .flip > .front,
    .flip > .back {
      display: block;
      transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition-duration: 0.5s;
      transition-property: transform, opacity;
    }
    .flip > .front {
      transform: rotateY(0deg);
    }
    .flip > .back {
      background-color: ${props => props.theme.color.black};
      position: absolute;
      opacity: 0;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transform: rotateY(-180deg);
      .detail-content {
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
      h2 {
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 30px;
        margin-bottom: 15px;
      }
      h3 {
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    .flip:hover > .front {
      transform: rotateY(180deg);
    }
    .flip:hover > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }

    .img-item {
      position: relative;
      width: 100%;
      height: 60vh;
      text-align: center;
      .absol-content {
        position: absolute;
        background: linear-gradient(
          21deg,
          rgba(25, 25, 25, 1) 0%,
          rgba(0, 212, 255, 0) 50%
        );
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;

        h2 {
          font-family: ${props => props.theme.font.TextFont2};
          font-size: 30px;
          text-align: start;
          padding: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .subcontent-wrap {
      width: 100%;

      .title {
        padding: 10px 0px 20px 0px;
        h2 {
          text-align: end;
          font-size: 30px;
        }
        h3 {
          text-align: end;
          font-size: 10px;
        }
      }
      .pot-img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }
      .img-item {
        position: relative;
        width: 200px;
        height: 120px;
      }
    }
  }
`;
