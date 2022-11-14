import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 500px;
  max-width: 1250px;
  padding: 50px 50px;
  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: ${props => props.theme.color.mainGreen};
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .card-wrap {
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    padding: 10px 10px;
  }
`;
