import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  ul li {
    font-family: ${props => props.theme.font.TextFont2};
    margin: 0px 0px;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;

    li:nth-child(0) {
      margin-top: 0px;
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    padding: 0px 0px 0px 0px;
    ul li {
      font-family: ${props => props.theme.font.TextFont2};
      margin: 10px 0px;
      font-size: 20px;
      font-weight: 500;

      li:nth-child(0) {
        margin-top: 0px;
      }
    }
  }
`;
