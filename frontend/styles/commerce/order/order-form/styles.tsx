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
  }

  .button {
    margin: auto;
    height: 55px;
    width: 400px;
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
`;
