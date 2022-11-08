import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 1000px;
  margin: 50px 400px 50px 400px;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    margin: 0 50px;
    padding: 10px 20px;
    border: 0.5px solid grey;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    :hover {
      background-color: ${props => props.theme.color.ivory};
    }
  }
`;
