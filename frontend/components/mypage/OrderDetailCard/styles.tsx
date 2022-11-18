import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  margin-top: 16px;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #ccc;

  .info {
    text-align: center;
    margin: 2%;
  }
  .kr-name {
    font-size: 16px;
  }
  .en-name {
    color: ${props => props.theme.color.brown};
    font-size: 10px;
  }
  p {
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 12px;
  }
  a {
    text-align: center;
    font-size: 8px;
    font-family: ${props => props.theme.font.TextFont2};
  }
  a:hover {
    color: ${props => props.theme.color.mainGreen};
  }
`;
