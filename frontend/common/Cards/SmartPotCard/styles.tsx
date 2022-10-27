import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 200px; */
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h2 {
    font-size: 45px;
    letter-spacing: 3px;
    font-weight: 200;
    font-family: ${props => props.theme.font.EnglishFont};
    color: ${props => props.theme.color.mainGreen};
  }

  h4 {
    color: ${props => props.theme.color.darkGreen};
    font-family: ${props => props.theme.font.EnglishFont};
    margin: 5px 0px;
    font-size: 30px;
  }

  p {
    font-size: 25px;
  }

  .smart-pot-btn {
    margin-top: 10px;
    font-size: 20px;
    padding: 3px;

    border-bottom: solid 2px ${props => props.theme.color.black};

    span {
      cursor: pointer;
    }
  }
`;
