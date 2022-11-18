import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  .carts {
    margin: auto;
    max-width: 1500px;
    padding: 50px 50px;
    width: 100%;
    margin-bottom: 60px;
    .button-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h1 {
      color: ${props => props.theme.color.black};
      font-size: 30px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .alert {
      margin: 70px auto 30px;
      text-align: center;
      font-size: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h3 {
        font-size: 40px;
        font-family: ${props => props.theme.font.TextFont2};
      }
    }
    .shop {
      cursor: pointer;
      text-align: center;
      letter-spacing: 2px;
      margin-top: 30px;

      padding: 10px 20px;
      font-size: 15px;
      border-radius: 5px;
      margin: auto;
      color: ${props => props.theme.color.whiteGray};
      background-color: ${props => props.theme.color.darkGreen};
    }
  }
  .card-wrap {
    background-color: ${props => props.theme.color.whiteGray};
    padding-top: 50px;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 1250px) {
    .carts {
      padding: 30px 30px;
    }
  }

  @media screen and (max-width: 600px) {
    .carts {
      padding: 0px 10px;

      h1 {
        color: ${props => props.theme.color.black};
        font-size: 25px;
        margin-bottom: 5px;
      }
    }
  }
`;
