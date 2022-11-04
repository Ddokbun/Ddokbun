import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  padding-top: 20px;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;

  padding-bottom: 100px;
  gap: 35px;

  @media screen and (${props => props.theme.mobile}) {
    gap: 0px;
    padding: 0 20px;
  }
`;
