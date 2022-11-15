import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  margin: auto;

  .month-container {
    display: flex;
    /* flex-direction: row; */
    color: #007aff;
    justify-content: space-between;
  }

  .week-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .week {
    margin: 5%;
    font-size: 24px;
    width: 13px;
  }

  .button-container {
  }

  .button {
    margin: 0 5%;
  }

  .day-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .selected {
    color: ${props => props.theme.color.mainGreen};
  }

  .today {
    color: ${props => props.theme.color.mainGreen};
  }

  .day {
    margin: 5%;
    font-size: 24px;
  }

  .day:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 3%;
  }
`;
