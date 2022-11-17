import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  color: white;
  padding: 40px 20px 60px 20px;
  .subcontent-wrap {
    width: 100%;
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
    }
    .img-02 {
      position: relative;
      width: 30vw;
      height: 50vh;
      margin: 10px;
    }
    .img-03 {
      position: relative;
      width: 30vw;
      height: 50vh;
      margin: 10px;
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    padding: 30px 10px 30px 10px;
    .subcontent-wrap {
      width: 100%;

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
