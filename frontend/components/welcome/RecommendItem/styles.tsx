import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  color: white;
  height: 100vh;
  .content-wrap {
    width: 100%;
    height: 100%;
    .img {
      width: 100%;
      height: 100vh;
      position: relative;
    }
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        21deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 100%
      );
      display: flex;
      align-items: flex-end;
      .font-wrap {
        padding: 30px;
        h2 {
          font-size: 45px;
          font-family: ${props => props.theme.font.TitleFont};
          padding-bottom: 60px;
        }
        h3 {
          font-size: 22px;
          font-family: ${props => props.theme.font.TextFont2};
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .content-wrap {
      .background {
        .font-wrap {
          padding: 50px 10px;
          h2 {
            font-size: 25px;
          }
          h3 {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
