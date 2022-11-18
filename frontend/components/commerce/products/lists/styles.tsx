import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 90px 40px;
  .p-title {
    width: 100%;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 20px;
    font-size: 12px;
  }
  .grid {
    margin: auto;
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-row: auto;
    grid-gap: 20px;
    grid-row-gap: 30px;
    place-items: center;
  }

  @media screen and (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 90px 10px;
  }
`;
