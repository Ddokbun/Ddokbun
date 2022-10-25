import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.brown};
  color: white;
  .subcontent-wrap {
    position: relative;
    width: 100%;
    height: 800px;
    .title {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        text-align: center;
        font-size: 70px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
      }
    }
    .back-img {
      max-width: 25%;
      height: 50%;
      position: absolute;
      top: 37%;
      left: 40%;
      transform: translate(-50%, -50%);
      .banner-img {
        max-height: 100px;
        opacity: 0.5;
      }
    }
    .front-img {
      max-width: 35%;
      height: 50%;
      position: absolute;
      top: 45%;
      left: 60%;
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
        top: 80%;
        left: 50%;
        transform: translate(-50%, -5%);
        h2 {
          text-align: center;
          font-size: 30px;
        }
        h3 {
          text-align: center;
          font-size: 10px;
        }
      }
    }
  }
`;
