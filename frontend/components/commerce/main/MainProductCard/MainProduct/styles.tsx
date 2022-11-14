import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.brown};
  color: white;
  margin-bottom: 10px;
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
        font-size: 50px;
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
      border-width: 2px;
      :hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 600px) {
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
      width: 500px;
      height: 500px;
    }
    .pot-img-back {
      position: absolute;
      width: 500px;
      height: 500px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      background: linear-gradient(
        21deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 100%
      );
      .font-wrap {
        padding: 30px;
        h2 {
          font-size: 50px;
        }
        h3 {
          font-size: 30px;
        }
        h4 {
          font-size: 18px;
        }
      }
      .button {
        display: none;
      }
    }
  }
`;
