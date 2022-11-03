import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5%;

  @media screen and (${props => props.theme.mobile}) {
    /* width: 50%; */
  }
`;
