import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  margin: auto;

  .month-container {
    margin-top: 5%;
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
    font-size: 24px;
    padding: 6% 6% 0;
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
    p {
      color: ${props => props.theme.color.mainGreen};
      border-bottom: 2px solid ${props => props.theme.color.mainGreen};
    }
  }

  .today {
    color: ${props => props.theme.color.mainGreen};
  }

  .day {
    font-size: 24px;
    padding: 5%;
  }

  .day:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
    margin: auto;

    .week {
      font-size: 18px;
    }
    .day {
      font-size: 18px;
    }
  }
`;
