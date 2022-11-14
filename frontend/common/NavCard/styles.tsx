import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  .grid-left {
    position: relative;
  }

  .grid-right {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    height: 100%;

    h3 {
      font-size: 26px;
      position: static;
      font-family: ${props => props.theme.font.EnglishFont};
    }

    p {
      padding-left: 2px;
      font-size: 18px;
      position: static;
      font-family: ${props => props.theme.font.TextFont2};
    }
  }
`;
