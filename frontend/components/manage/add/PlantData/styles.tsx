import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 5%;
  grid-template-columns: repeat(2, 35%);
  font-family: ${props => props.theme.font.TextFont2};
  padding-left: 4px;

  .info-container {
    display: flex;
    /* flex-direction: row; */
    justify-content: flex-start;
    align-items: center;
    /* width: 200px; */
    text-align: center;
    margin: 5% 0;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
