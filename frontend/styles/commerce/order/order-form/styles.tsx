import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  .background {
    background-color: ${props => props.theme.color.whiteGray};
  }
  .contents {
    display: grid;
    margin: auto;
    max-width: 1500px;
    width: 100%;
    padding: 50px 50px 50px;
  }

  .row {
    h1 {
      color: ${props => props.theme.color.black};
      padding: 0px;
      font-size: ${props => props.theme.size.h2Web};
      margin-bottom: 5px;
    }

    :nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }

  .sub-title {
    border-bottom: 2px solid ${props => props.theme.color.darkGray};
  }

  .pay-grid {
    max-width: 1500px;
    width: 100%;
    padding: 50px 50px 50px;
    display: grid;
    margin: auto;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto;
  }

  .button {
    margin-top: auto;
    margin-bottom: 50px;
    width: 100%;
    padding: 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.font.TextFont2};
    letter-spacing: 7px;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.color.whiteGray};
    background-color: ${props => props.theme.color.darkGreen};
  }

  @media screen and (max-width: 900px) {
    .row {
      h1 {
        padding-left: 5px;
      }
    }
    .contents {
      display: grid;
      padding: 30px 5px;
    }

    .pay-grid {
      width: 100%;
      padding: 50px 10px 50px;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    .button {
      margin-top: 30px;
      margin-bottom: 50px;
      width: 100%;
      padding: 8px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TextFont2};
      letter-spacing: 7px;
      font-size: 20px;
      cursor: pointer;
      color: ${props => props.theme.color.whiteGray};
      background-color: ${props => props.theme.color.darkGreen};
    }
  }
`;
