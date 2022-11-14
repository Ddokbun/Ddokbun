import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #e9e9e9;
  margin-bottom: 10px;
  .img-wrap {
    position: relative;
    height: 500px;
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    height: 500px;
  }
`;
