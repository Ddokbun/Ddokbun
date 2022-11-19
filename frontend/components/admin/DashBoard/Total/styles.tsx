import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 400px;
  .content-wrapper {
  }
  .div-flex {
    width: 990px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-wrapper {
    background-color: #fafafa;
    width: 330px;
    margin-right: 10px;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  h2 {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 25px;
    color: grey;
  }
  .order-data {
    font-family: ${props => props.theme.font.TitleFont};
    font-size: 41px;
    display: flex;
    justify-content: center;
    margin: 10px;
  }
`;
