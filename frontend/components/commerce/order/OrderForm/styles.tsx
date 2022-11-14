import styled from "styled-components";

interface StyleProps {
  maxWidth: string | null;
}

export const InputRow = styled.div<StyleProps>`
  margin-bottom: 5px;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-row: auto;
  gap: 2px;
  span {
    display: inline-flex;
    align-items: center;
  }
  p {
    font-size: 15px;
    grid-column: 2/3;
    font-family: ${props => props.theme.font.TitleFont};
    color: ${props => props.theme.color.red};
    height: 20px;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 22px;
    font-family: ${props => props.theme.font.TitleFont};
  }
  input {
    max-width: ${props => props.maxWidth || "100%"};
    font-size: 22px;
    font-family: ${props => props.theme.font.TextFont2};
    border: 1px solid ${props => props.theme.color.darkGreen};
    background-color: ${props => props.theme.color.ivory};
    height: 40px;
    border-radius: 5px;
    padding: 3px;

    :focus {
      background-color: ${props => props.theme.color.ivoryHover};
      outline: 3px solid ${props => props.theme.color.mainGreen};
    }
  }
  .nofocus {
    :focus {
      background-color: ${props => props.theme.color.ivory};
      outline: none;
    }
  }
  .address {
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 200px;
    grid-template-rows: repeat(3, 40px);
    max-width: ${props => props.maxWidth || "100%"};
    color: ${props => props.theme.color.black};

    input {
      grid-column: 1 / 3;
      :nth-child(1) {
        grid-column: 1/2;
      }
    }
    .toggle-button {
      grid-row: 1 /2;
      grid-column: 2/3;
      background-color: ${props => props.theme.color.mainGreen};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TitleFont};
      font-size: 20px;
      letter-spacing: 3px;
      cursor: pointer;
    }
  }

  .email {
    max-width: ${props => props.maxWidth};
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 250px auto 1fr;
    grid-template-rows: 1fr;
    span {
      display: flex;
      align-items: center;
    }
  }

  .phone-num {
    width: 100%;
    max-width: ${props => props.maxWidth};
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 4fr auto 5fr auto 5fr;

    input {
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    padding: 3px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 20px;
    gap: 10px;
    p {
      font-size: 15px;
      grid-area: 3 /1 /4 / 2;
      font-family: ${props => props.theme.font.TitleFont};
      color: ${props => props.theme.color.red};
      height: 20px;
    }

    label {
      display: flex;
      align-items: center;
      font-size: 22px;
      font-family: ${props => props.theme.font.TitleFont};
    }
    input {
      max-width: 100%;
      width: 100%;
      font-size: 22px;
      font-family: ${props => props.theme.font.TextFont2};
      border: 1px solid ${props => props.theme.color.darkGreen};
      background-color: ${props => props.theme.color.ivory};
      height: 40px;
      border-radius: 5px;
      padding: 3px;

      :focus {
        background-color: ${props => props.theme.color.ivoryHover};
        outline: 3px solid ${props => props.theme.color.mainGreen};
      }
    }
    .nofocus {
      :focus {
        background-color: ${props => props.theme.color.ivory};
        outline: none;
      }
    }
    .address {
      position: relative;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 150px;

      grid-template-rows: repeat(3, 40px);
      max-width: ${props => props.maxWidth || "100%"};

      input {
        grid-column: 1 / 3;
        :nth-child(1) {
          grid-column: 1/2;
        }
      }
      .toggle-button {
        grid-row: 1 /2;
        grid-column: 2/3;
        background-color: ${props => props.theme.color.mainGreen};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${props => props.theme.font.TitleFont};
        font-size: 20px;
        letter-spacing: 3px;
        cursor: pointer;
      }
    }

    .email {
      max-width: ${props => props.maxWidth};
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 250px auto 1fr;
      grid-template-rows: 1fr;
      span {
        display: flex;
        align-items: center;
      }
    }

    .phone-num {
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 4fr auto 5fr auto 5fr;

      input {
        text-align: center;
      }
    }
  }
`;

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;

  .grid-form {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-gap: 10px;
    display: grid;
  }

  @media screen and (max-width: 600px) {
    .grid-form {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
      grid-gap: 0px;
      display: grid;
    }
  }
`;
