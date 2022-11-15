import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;

  h2 {
    font-size: 30px;
    font-family: ${props => props.theme.font.EnglishFont};
    color: ${props => props.theme.color.black};
  }
  h4 {
    color: ${props => props.theme.color.black};
    font-family: ${props => props.theme.font.EnglishFont};
    margin: 5px 0px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
  .img-wrap {
    width: 250px;
    height: 250px;
    position: relative;
  }
  .smart-pot-btn {
    margin-top: 10px;
    font-size: 15px;
    padding: 3px;
    border-bottom: solid 2px ${props => props.theme.color.black};
    span {
      cursor: pointer;
    }
  }
`;
