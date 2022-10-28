import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin: auto;
  max-width: 1250px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 50px;
  width: 100%;
  height: 500px;
  padding: 50px 50px;
  .row h1 {
    color: ${props => props.theme.color.mainGreen};
    margin: 0px !important;
    padding: 0px;
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .sub-title {
    margin: 0px;
    border-bottom: 3px solid ${props => props.theme.color.darkGreen};
  }
`;
