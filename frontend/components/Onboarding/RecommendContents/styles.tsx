import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${props => props.theme.color.ivory};
  .banner-wrap {
    position: relative;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 100%;
    height: 400px;
    .banner-wrap {
      position: relative;
      .banner-img {
        vertical-align: middle;
      }

      .title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
          text-align: center;
          font-size: 50px;
        }
        h2 {
          text-align: center;
          font-size: 10px;
        }
      }
    }
  }
`;
