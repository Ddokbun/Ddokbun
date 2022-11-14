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

    h2 {
      font-size: 90px;
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    height: 500px;
  }
`;
