import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.ivory};
  color: black;
  .subcontent-wrap {
    position: relative;
    width: 100%;
    height: 800px;
    .title {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -5%);

      h2 {
        text-align: center;
        font-size: 70px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
      }
      .banner-img {
        padding-top: 100px;
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
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
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
