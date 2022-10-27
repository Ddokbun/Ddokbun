import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.mainGreen};
  color: white;
  .subcontent-wrap {
    position: relative;
    width: 100%;
    height: 800px;
    .title {
      position: absolute;
      top: 80%;
      left: 70%;
      transform: translate(-5%, -5%);
      h2 {
        text-align: end;
        font-size: 70px;
      }
      h3 {
        text-align: end;
        font-size: 25px;
      }
    }
    .pot-img {
      max-width: 50%;
      height: 50%;
      display: flex;

      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      .banner-img {
        max-height: 100px;
      }
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    .subcontent-wrap {
      position: relative;
      width: 100%;
      height: 400px;

      .title {
        position: absolute;
        top: 82%;
        left: 60%;
        transform: translate(-5%, -5%);
        h2 {
          text-align: end;
          font-size: 30px;
        }
        h3 {
          text-align: end;
          font-size: 10px;
        }
      }
    }
  }
`;
