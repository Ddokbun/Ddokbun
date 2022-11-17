import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  background-color: #e9e9e9;
  .content-wrap {
    width: 45%;

    .img-wrap {
      position: relative;
      height: 500px;
      width: 100%;
      overflow: hidden;
    }
  }
  .text-wrap {
    display: flex;
    align-items: center;
    margin-left: 70px;
    width: 60%;
    h2 {
      font-size: 35px;
      margin-bottom: 25px;
    }
    h3 {
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 17px;
    }
  }

  @media screen and (max-width: 1024px) {
    .text-wrap {
      margin-left: 40px;
      h2 {
        font-size: 30px;
        margin-bottom: 25px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .content-wrap {
      width: 70%;
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
    .content-wrap {
      width: 100%;

      .img-wrap {
        position: relative;
        top: 0;
        height: 400px;
        width: 100%;
        overflow: hidden;
        margin-bottom: 20px;
      }
    }

    .text-wrap {
      display: block;
      margin: 20px auto;
      text-align: center;
      .text {
        padding-bottom: 20px;
      }

      h2 {
        font-size: 28px;
      }
      h3 {
      }
    }
  }
`;
