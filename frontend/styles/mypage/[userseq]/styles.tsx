import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 5% auto;
  max-width: 1240px;
  width: 100%;
  background-color: "#fafafa";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .card-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40%);
    width: 100%;
  }

  .button-container {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    .card-container {
      grid-template-columns: repeat(1, 80%);
    }
  }
`;
