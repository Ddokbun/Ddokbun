import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  .banner-wrap {
    position: relative;
    .title {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        text-align: center;
        font-size: 100px;
      }
      h2 {
        text-align: center;
        font-size: 20px;
      }
    }
  }
  .kakao-btn {
    background-image: url("../../../assets/kakao_login_large_wide.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px auto;
    /* padding: -10px; */
    color: transparent;
    width: 300px;
    height: 45px;
  }

  @media screen and (${props => props.theme.mobile}) {
    .banner-wrap {
      position: relative;

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
          font-size: 16px;
        }
      }
    }
  }
`;
