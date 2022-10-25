import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  color: white;
  .subcontent-wrap {
    position: relative;
    width: 100%;
    height: 800px;
    .title {
      position: absolute;
      top: 4%;
      left: 5%;
      transform: translate(-5%, -5%);
      h2 {
        text-align: start;
        font-size: 70px;
      }
      h3 {
        text-align: start;
        font-size: 25px;
      }
    }
    .pot-img {
      display: flex;
      position: absolute;
      top: 40%;

      /* transform: translate(-50%, -50%); */
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    .subcontent-wrap {
      position: relative;
      width: 100%;
      height: 400px;

      .title {
        position: absolute;
        top: 4%;
        left: 5%;
        transform: translate(-5%, -5%);
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
        display: flex;
        position: absolute;
        top: 40%;

        /* transform: translate(-50%, -50%); */
      }
    }
  }
`;
