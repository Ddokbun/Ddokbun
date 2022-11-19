import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.form)`
  width: 100%;

  /* padding-left: 5%; */
  margin-top: 1%;

  .link-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2% 0 4%;
    font-family: ${props => props.theme.font.TextFont2};
    span {
      margin-right: 1%;
    }
  }

  a {
    font-size: 16px;
    color: ${props => props.theme.color.mainGreen};
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-top: 1%;
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



  @media screen and (max-width: 600px) {
    .grid {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .button-container {
      grid-template-columns: none;

      display: flex;
      justify-content: space-between;
    }
    .calander-container {
      width: 100%;
      margin-bottom: 5%;
    }
  }
`;
