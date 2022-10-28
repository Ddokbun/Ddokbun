import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;

  .month-container {
    display: flex;
    /* flex-direction: row; */
    color: #007aff;
    justify-content: space-around;
  }

  .week-container {
    display: flex;
    flex-direction: row;
  }

  .week {
    margin: 5%;
  }

  .button-container {
  }

  .button {
    margin: 0 5%;
  }
`;
