import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 4%;
  ul {
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 600px) {
    top: 500px;
    right: 1%;
    width: 95%;
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
`;
