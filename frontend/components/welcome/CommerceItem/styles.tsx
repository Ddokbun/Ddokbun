import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.mainGreen};
  color: white;
  padding: 20px;
  height: 100vh;
  .subcontent-wrap {
    width: 100%;
    .title {
      padding: 30px 0px 40px 0px;
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
    .pot-img {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
    }
    .img-item {
      position: relative;
      width: 500px;
      height: 300px;
    }
  }

  @media screen and (${props => props.theme.mobile}) {
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
