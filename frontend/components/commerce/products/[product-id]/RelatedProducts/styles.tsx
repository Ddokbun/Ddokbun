import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 0;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 50px;
    font-weight: 600;
    color: ${props => props.theme.color.mainGreen};
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 35px;
    }
  }
`;
