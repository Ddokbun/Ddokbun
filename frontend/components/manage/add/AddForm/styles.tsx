import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;

  /* padding-left: 5%; */
  margin-top: 1%;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  .calander-container {
    position: relative;
  }

  .button-container {
    display: flex;
    /* justify-content: space-between; */
    grid-template-columns: none;
  }

  .submit-button-container {
    grid-template-columns: none;
    display: flex;
    justify-content: flex-end;
    /* margin: atuo; */
    width: 100%;
  }
  .cancel-button-container {
    grid-template-columns: none;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  @media screen and (${props => props.theme.mobile}) {
    .grid {
      grid-template-columns: repeat(1, 90%);
      justify-content: center;
      margin: auto;
    }

    .button-container {
      grid-template-columns: none;

      display: flex;
      justify-content: space-between;
    }
  }
`;
