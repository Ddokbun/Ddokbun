import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 2px 2px 4px 5px rgba(0, 0, 0, 0.2);
  height: 550px;

  div:nth-child(2) {
    height: 100% !important;
  }
  .close {
    margin-bottom: 30px;
    position: relative;
    right: 30px;
    top: 15px;
    cursor: pointer;
    svg {
      transform: scale(2); // 75% of original size
    }
    svg path {
      fill: #b9b9b9;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    top: 80px;
    transform: translate(-50%, -0%);
  }
`;
