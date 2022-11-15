import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #e9e9e9;
  margin-bottom: 10px;
  .img-wrap {
    position: relative;
    height: 500px;
    width: 500px;
    overflow: hidden;
  }
  .text-wrap {
    display: flex;
    align-items: center;
    margin-left: 70px;
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

  @media screen and (max-width: 600px) {
    display: block;
    .img-wrap {
      margin-bottom: 20px;
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
