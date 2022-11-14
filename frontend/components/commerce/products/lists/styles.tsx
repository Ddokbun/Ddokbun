import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 90px 40px;
  p {
    width: 100%;
    max-width: 1500px;
    margin: auto;
    font-size: 12px;
  }
  .grid {
    margin: auto;
    width: 100%;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-row: auto;
    grid-gap: 10px;
    grid-row-gap: 60px;
    place-items: center;
  }

  @media screen and (${props => props.theme.tablet}) {
  }

  @media screen and (max-width: 600px) {
  }
`;
