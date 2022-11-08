import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 1000px;
  margin: 50px 400px 50px 400px;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: #333333;
  }
`;
