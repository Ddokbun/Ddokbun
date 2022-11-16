import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  span {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: ${props => props.theme.font.TextFont2};
  }
  label {
    font-size: 20px;
    font-family: ${props => props.theme.font.TextFont2};
  }
  input {
    font-family: ${props => props.theme.font.TextFont2};
    padding: 11.5px 11px;
    border-radius: 3px;
  }
  input:focus {
    outline: 2px solid ${props => props.theme.color.mainGreen};
  }

  .error {
    font-family: ${props => props.theme.font.TextFont2};
    height: 20px;
    color: ${props => props.theme.color.red};
  }
  .flex-form {
    padding: 10px 30px;

    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .grid {
    width: 100%;
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 44px;
    grid-gap: 5px;
    grid-auto-flow: row;
    grid-auto-rows: auto;
  }

  .flex-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .phone-num input {
    display: flex;
    justify-content: center;
    width: 30%;
  }

  .email input {
    width: 45%;
  }
  .address {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 5px;
    margin-bottom: 10px;
  }
  .address-grid {
    with: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-template-rows: 44px 44px 44px;
    grid-gap: 8px;

    input:nth-child(3) {
      grid-column: 1 / 3;
    }
    input:nth-child(4) {
      grid-column: 1 / 3;
    }
  }

  .toggle-button {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.color.darkGreen};
    color: ${props => props.theme.color.whiteGray};
    font-size: 16px;
    border-radius: 5px;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    .flex-form {
      padding: 10px 0px;
    }
    .grid {
      margin-bottom: 10px;
      grid-template-columns: 1fr;
      grid-template-rows: auto 44px;
      grid-gap: 5px;
      grid-auto-flow: row;
      grid-auto-rows: auto;
    }

    .address {
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      grid-gap: 5px;
    }
    .address-grid {
      with: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 44px 44px 44px auto;
      grid-gap: 8px;



  }
`;
