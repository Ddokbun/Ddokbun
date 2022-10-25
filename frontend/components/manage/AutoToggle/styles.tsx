import styled from "styled-components";

interface Props {
  toggle: boolean;
}

// https://velog.io/@whljm1003/React-toggle-switch-%EA%B8%B0%EB%8A%A5

export const Wrapper = styled.div<Props>`
  /* width: max-content; */
  width: 50px;
  display: flex;
  flex-direction: "column";

  .toggle {
    width: 40px;
    height: 20px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${props => (props.toggle ? "#03C75A" : "#D9D9D9")};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .circle {
    background-color: white;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    position: absolute;
    left: 5%;
    transition: all 0.5s ease-in-out;
    ${props =>
      props.toggle &&
      `
      transform: translate(22px, 0);
      transition: all 0.5s ease-in-out;
    `}
  }
  .toggle-status {
    font-size: 16px;
    color: ${props => props.theme.color.mainGreen};
    transition: all 0.5s ease-in-out;
    /* text-align: center; */
  }
`;
