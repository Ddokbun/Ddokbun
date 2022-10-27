import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.color.mainGreen};  

  @media screen and (${props => props.theme.mobile}) {
  }
`;
