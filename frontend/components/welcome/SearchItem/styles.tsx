import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.brown};
  color: white;
  padding: 20px;
  height: 100vh;
  .subcontent-wrap {
    width: 100%;
    .title {
      padding-bottom: 50px;
      h2 {
        text-align: center;
        font-size: 70px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
        font-family: ${props => props.theme.font.TitleFont};
      }
    }
    .img {
      display: flex;
      height: 800px;
      justify-content: center;
    }
    .img-wrap {
      position: relative;
    }
    .back-wrap {
      position: absolute;
      top: 30%;
      left: 90%;
      transform: translate(-95%, -50%);
    }
    .back-img {
      width: 600px;
      height: 450px;
      position: relative;
      .banner-img {
        max-height: 100px;
        opacity: 0.5;
      }
    }
    .front-wrap {
      position: absolute;
      top: 60%;
      left: 80%;
      transform: translate(-40%, -50%);
    }
    .front-img {
      width: 800px;
      height: 550px;
      position: relative;
      .banner-img {
        max-height: 100px;
      }
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    .subcontent-wrap {
      width: 100%;
      .title {
        h2 {
          text-align: center;
          font-size: 30px;
        }
        h3 {
          text-align: center;
          font-size: 10px;
        }
      }

      .img {
        height: 300px;
      }

      .back-wrap {
        position: absolute;
        top: 30%;
        left: 90%;
        transform: translate(-95%, -50%);
      }
      .back-img {
        width: 200px;
        height: 150px;
        position: relative;
        .banner-img {
          max-height: 100px;
          opacity: 0.5;
        }
      }
      .front-wrap {
        position: absolute;
        top: 60%;
        left: 80%;
        transform: translate(-40%, -50%);
      }
      .front-img {
        width: 330px;
        height: 250px;
        position: relative;
        .banner-img {
          max-height: 100px;
        }
      }
    }
  }
`;
