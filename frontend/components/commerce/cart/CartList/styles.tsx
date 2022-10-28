import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .grid {
    padding: 4px 0px;
    grid-gap: 4px;
    background-color: ${props => props.theme.color.darkGreen};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 180px;
    grid-auto-rows: 180px;
  }

  .subtotal {
    display: grid;
    grid-template-rows: 70px;
    grid-template-columns: 180px 1fr auto;
    font-size: 30px;
    color: ${props => props.theme.color.mainGreen};

    .subtotal-left {
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        letter-spacing: 3px;
      }
    }
    .subtotal-right {
      padding-right: 30px;
      color: ${props => props.theme.color.darkGreen};
      grid-column: 3 / 4;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        letter-spacing: 3px;
      }
    }
  }
`;
