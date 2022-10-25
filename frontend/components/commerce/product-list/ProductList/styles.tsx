import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-row: auto;
  grid-gap: 50px;
  margin: auto;
  width: 100%;
  place-items: center;

  @media screen and (${props => props.theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-gap: 50px;
  }
`;
