import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1500px;
  padding: 50px 50px;
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

  .card-wrap {
    margin: 100px 0px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .alert {
    margin: 70px auto 30px;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
      font-family: ${props => props.theme.font.TextFont2};
    }
  }
  .shop {
    cursor: pointer;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 30px;
    width: 220px;
    padding: 10px 0px;
    font-size: 20px;
    border-radius: 5px;
    margin: auto;
    color: ${props => props.theme.color.whiteGray};
    background-color: ${props => props.theme.color.darkGreen};
  }

  @media screen and (max-width: 600px) {
    padding: 10px 10px;
  }
`;
