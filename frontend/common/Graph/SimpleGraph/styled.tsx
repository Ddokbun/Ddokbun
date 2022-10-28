import styled from "styled-components";

interface ProgressProps {
  level: string;
}

export const Wrapper = styled.div`
  padding: 35px 40px;
  width: 80%;
  min-width: 200px;
  max-width: 400px;
  height: 280px;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.color.darkGreen};
  .line {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const Progress = styled.div<ProgressProps>`
  width: 100%;

  .graph-total {
    display: flex;
    margin-left: 20px;
    border-radius: 12px;
    width: 90%;
    height: 20px;
    background-color: #d9d9d9;

    .graph-now {
      width: ${props => props.level};
      height: 100%;
      border-radius: inherit;
      background-color: #80c66e;
    }
  }
`;
