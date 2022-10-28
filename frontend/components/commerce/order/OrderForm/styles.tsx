import styled from "styled-components";

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
    .address {
      position: relative;
    }
    .row {
      display: flex;
      flex-direction: column;
      gap: 2px;
      label {
        font-size: 25px;
        font-family: ${props => props.theme.font.TextFont2};
      }
      input {
        font-size: 25px;
        font-family: ${props => props.theme.font.TextFont2};
        background-color: ${props => props.theme.color.ivory};
        height: 40px;
        border-radius: 5px;
        padding: 3px;
        :focus {
          outline: 3px solid ${props => props.theme.color.mainGreen};
        }
      }
    }
  }
`;
