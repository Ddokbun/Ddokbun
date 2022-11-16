import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  padding-bottom: 100px;
  .title {
    margin: 50px 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 30px;
    margin: 30px 0px 10px 0px;
  }
  .img-wrap {
    display: flex;
    justify-content: center;
    .hot-plant {
      position: relative;
      width: 500px;
      height: 500px;
      border-radius: 10px;
      overflow: hidden;
    }
    .opacity {
      color: #dedede;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      width: 500px;
      height: 500px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        21deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 60%
      );
      h2 {
        font-size: 40px;
        margin-bottom: 30px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .img-wrap {
      .hot-plant {
        width: 350px;
        height: 350px;
        .opacity {
          position: absolute;
          width: 350px;
          height: 350px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          h2 {
            font-size: 30px;
          }
        }
      }
    }
  }
`;
