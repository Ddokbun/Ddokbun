import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: 10%;

  @media screen and (${props => props.theme.mobile}) {
    flex-direction: column;
  }
`;
