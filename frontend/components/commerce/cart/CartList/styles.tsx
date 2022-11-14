import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .grid {
    padding: 2px 0px;
    grid-gap: 2px;
    background-color: ${props => props.theme.color.darkGray};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px;
    grid-auto-rows: 150px;
  }

  .subtotal {
    display: grid;
    margin-bottom: 25px;
    grid-template-rows: 50px;
    grid-template-columns: 180px 1fr auto;
    font-size: 30px;
    color: ${props => props.theme.color.black};

    .subtotal-left {
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 20px;
        letter-spacing: 2px;
      }
    }
    .subtotal-right {
      padding-right: 30px;
      grid-column: 3 / 4;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        letter-spacing: 2px;
        font-size: 25px;
      }
    }
  }
`;
