import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  background-color: ${props => props.theme.color.whiteGray};
  .survey {
    margin: auto;
    max-width: 1500px;
    padding-top: 50px;

    .dots {
      display: flex;
      justify-content: center;
    }
  }
`;
