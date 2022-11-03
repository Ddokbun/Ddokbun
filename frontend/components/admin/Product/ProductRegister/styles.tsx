import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 1000px;
  margin-left: 400px;
  margin-top: 50px;
  height: 100%;
  .flex {
    padding: 0px 150px;
    display: flex;
    justify-content: end;
  }
  .register {
    border: 2px solid #b9b9b9;
    height: 50px;
    width: 120px;
    margin: 10px;
    color: #ffffff;
    background-color: ${props => props.theme.color.darkGreen};
    border-radius: 5px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .input {
    border: 2px solid #b9b9b9;
    padding: 15px;
    height: 60px;
    width: 400px;
    margin: 10px;
    color: #000000;
    background-color: #d1d1d1;
    border-radius: 5px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .input-img {
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    border: 2px solid #b9b9b9;
    color: #000000;
    background-color: #d1d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plant-input {
    width: 72%;
    margin: 10px auto;
    border-radius: 5px;
    input {
      padding: 20px;
      width: 100%;
      height: 60px;
      border-radius: 5px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
      border: 2px solid #b9b9b9;
      color: #000000;
      background-color: #d1d1d1;
    }
  }
  .product-content {
    width: 72%;
    margin: 20px auto;
    border-radius: 5px;
    input {
      padding: 20px;
      width: 100%;
      height: 280px;
      border-radius: 5px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
      border: 2px solid #b9b9b9;
      color: #000000;
      background-color: #d1d1d1;
    }
  }
`;
