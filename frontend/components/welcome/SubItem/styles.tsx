import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.brown};
  color: white;
  .subcontent-wrap {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      padding-left: 20px;
      margin-bottom: 30px;
      h2 {
        text-align: start;
        font-size: 70px;
      }
      h3 {
        text-align: start;
        font-size: 25px;
        font-family: ${props => props.theme.font.TitleFont};
      }
    }
    .position-wrap {
      position: relative;
      .pot-img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0px 60px 0px;
      }
      .img-01 {
        position: relative;
        width: 30vw;
        height: 50vh;
        margin: 10px;
        background-color: red;
      }
      .img-02 {
        position: relative;
        width: 30vw;
        height: 50vh;
        margin: 10px;
        background-color: red;
      }
      .img-03 {
        position: relative;
        width: 30vw;
        height: 50vh;
        margin: 10px;
        background-color: red;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 30px 10px 30px 10px;
    .subcontent-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .title {
        h2 {
          text-align: start;
          font-size: 30px;
        }
        h3 {
          text-align: start;
          font-size: 10px;
        }
      }
      .pot-img {
        margin: 20px 0px 40px 0px;
      }
      .img-01 {
        position: relative;
        width: 30vw;
        height: 20vh;
        margin: 10px;
      }
      .img-02 {
        position: relative;
        width: 30vw;
        height: 20vh;
        margin: 10px;
      }
      .img-03 {
        position: relative;
        width: 30vw;
        height: 20vh;
        margin: 10px;
      }
    }
  }
`;
