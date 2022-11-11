import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 350px;

  p {
    font-family: ${props => props.theme.font.TextFont2};
  }
  .button-container {
    font-family: ${props => props.theme.font.TextFont2};
    display: flex;
    justify-content: space-around;
  }

  button {
    margin: 4%;
  }
`;
