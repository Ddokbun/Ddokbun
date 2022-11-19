import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  color: white;
  padding: 20px;
  height: 100vh;
  .subcontent-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .position {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title {
      width: 100%;
      h2 {
        text-align: center;
        font-size: 70px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
        font-family: ${props => props.theme.font.TitleFont};
        padding-bottom: 60px;
      }
      .front-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: auto;
        .img {
          width: 100%;
          height: 60vh;
          position: relative;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .content-wrap {
          background-color: ${props => props.theme.color.darkGreen};
          margin: 20px;
          width: 100%;
          height: 60vh;
          padding: 20px;
          box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          .content-title {
            padding: 20px;
            h2 {
              font-family: ${props => props.theme.font.TitleFont};
              text-align: start;
              font-size: 40px;
            }
            h3 {
              text-align: start;
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .subcontent-wrap {
      padding: 20px;
      .title {
        h2 {
          font-size: 30px;
        }
        h3 {
          font-size: 10px;
          padding-bottom: 30px;
        }
        .img {
          width: 400px;
          height: 250px;
          position: relative;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }
`;
