import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.darkGray};
  color: #262626;
  margin-bottom: 50px;
  .pot-img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
  .pot-img-front {
    position: relative;
  }
  .pot-img-back {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .font-wrap {
      padding: 30px;
      h2 {
        font-size: 40px;
        margin: 20px;
        font-family: ${props => props.theme.font.TextFont2};
      }
      h3 {
        font-size: 30px;
        margin: 20px 0px 50px 0px;
      }
      h4 {
        font-size: 18px;
        font-family: ${props => props.theme.font.EnglishFont};
      }
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button-wrap {
      font-family: ${props => props.theme.font.TextFont2};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 250px;
      height: 50px;
      border: 1px solid #262626;

      :hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 600px) {
    color: white;
    .pot-img {
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
      }

      .banner-img {
      }
    }
    .pot-img-front {
      position: relative;
      width: 100%;
      height: 500px;
    }
    .pot-img-back {
      position: absolute;
      width: 100%;
      height: 500px;
      display: flex;
      align-items: flex-end;
      background: linear-gradient(
        21deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 60%
      );
      .font-wrap {
        padding: 1px;
        h2 {
          font-size: 35px;
          margin: 2px;
        }
        h3 {
          font-size: 25px;
          margin: 0px 0px 25px 0px;
        }
        h4 {
          font-size: 15px;
          margin: 0px 0px 20px 0px;
        }
      }
      .button {
        display: none;
      }
    }
  }
`;
