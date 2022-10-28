import styled from "styled-components";

interface StyleProps {
  maxWidth: string | null;
}

export const InputRow = styled.div<StyleProps>`
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2px;
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

    input {
      grid-column: 1 / 2;
      :nth-child(3) {
        grid-column: 1/3;
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
`;

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;

  .grid-form {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-gap: 25px;
    display: grid;
  }
`;
