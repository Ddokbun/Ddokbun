import styled from "styled-components";

interface Props {
  isBold: boolean;
}

export const Wrapper = styled.section<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.darkGreen};
  margin-bottom: 5%;

  h1 {
    color: ${props => props.theme.color.mainGreen};
    font-weight: ${props => (props.isBold ? "bold" : "none")};
    font-size: 36px;
  }

  .add-btn-container {
    position: absolute;
    bottom: 1%;
    right: 2%;
  }

  @media screen and (${props => props.theme.mobile}) {
    width: 98%;
    padding-left: 3%;
    display: flex;
    justify-content: flex-start;
    .add-btn-container {
      position: absolute;
      bottom: 1%;
      right: 2%;
    }
  }
`;
