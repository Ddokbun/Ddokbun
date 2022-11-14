import styled from "styled-components";

export const Wrapper = styled.div`
  .img-wrap {
    position: relative;
    height: 500px;
    z-index: -1;
    margin: auto;
    margin-bottom: 30px;
  }
  .wrap {
    margin: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    h2 {
      font-size: 90px;
      text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
    }
    .button-wrap {
      margin-top: 20px;
      display: flex;
    }
    button {
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
      color: black;
      padding: 10px 20px 10px 20px;
      width: 180px;
      border-radius: 5px;
      background-color: #f7f7f7;
      margin: auto;
    }
  }
  @media screen and (max-width: 600px) {
    height: 500px;
  }
`;
