import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;

  font-family: ${props => props.theme.font.EnglishFont};
  font-size: 18px;
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    color: ${props => props.theme.color.darkGreen};
    font-size: 40px;
  }
  .img_wrap {
    width: 100px;
    display: flex;
    justify-content: space-evenly;

    svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
      path {
        fill: transparent;
        stroke: ${props => props.theme.color.darkGreen};
        stroke-width: 3;
      }
    }

    .user_svg__user {
      width: 25px;
      path {
        fill: ${props => props.theme.color.darkGreen};
        stroke: ${props => props.theme.color.darkGreen};
        stroke-width: 20;
      }
    }
  }

  .menu {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 24px;
      color: ${props => props.theme.color.darkGreen};
      li {
        margin: 20px;
        cursor: pointer;
      }
    }
  }
  .icon-wrapper {
    display: flex;
    align-items: center;
  }
  #nav-icon2 {
    cursor: pointer;
    width: 30px;
    height: 25px;
    position: relative;
  }

  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: ${props => props.theme.color.darkGreen};
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon2 span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  #nav-icon2 span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  #nav-icon2 span:nth-child(1),
  #nav-icon2 span:nth-child(2) {
    top: 0px;
  }

  #nav-icon2 span:nth-child(3),
  #nav-icon2 span:nth-child(4) {
    top: 10px;
  }

  #nav-icon2 span:nth-child(5),
  #nav-icon2 span:nth-child(6) {
    top: 20px;
  }

  #nav-icon2.open span:nth-child(1),
  #nav-icon2.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon2.open span:nth-child(2),
  #nav-icon2.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon2.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  #nav-icon2.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  #nav-icon2.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(5) {
    left: 5px;
    top: 12px;
  }

  #nav-icon2.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 12px;
  }

  @media screen and (${props => props.theme.mobile}) {
    padding: 0px 10px;

    .menu {
      display: none;
    }
    .nav_svg {
      display: block;
    }

    .logo {
      font-size: 30px;
      order: 0;
    }

    .img_wrap {
      height: 100%;
      width: 60px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #nav-icon2 {
      cursor: pointer;
      width: 25px;
      height: 20px;
      position: relative;
    }

    #nav-icon2 span {
      height: 3px;
      width: 50%;
    }

    #nav-icon2 span:nth-child(3),
    #nav-icon2 span:nth-child(4) {
      top: 8px;
    }

    #nav-icon2 span:nth-child(5),
    #nav-icon2 span:nth-child(6) {
      top: 16px;
    }

    #nav-icon2.open span:nth-child(1) {
      left: 5px;
      top: 7px;
    }

    #nav-icon2.open span:nth-child(5) {
      left: 5px;
      top: 10px;
    }

    #nav-icon2.open span:nth-child(6) {
      left: calc(50% - 5px);
      top: 10px;
    }
  }
`;

export const Slider = styled(motion.div)`
  padding: 20px;
  top: 80px;
  opacity: 1;
  position: fixed;
  background-color: #fafafa;
  z-index: 1;
  width: 100%;
  height: calc(100vh - 80px);
  .menu {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .title {
    heiggt: 40px;
    margin: 12px 0px;
    color: ${props => props.theme.color.darkGreen};
    padding-bottom: 2px;
    border-bottom: 1px solid ${props => props.theme.color.darkGreen};
    font-size: 24px;
    font-family: ${props => props.theme.font.TextFont2};
    font-weight: 600;
    :hover {
      cursor: pointer;
    }
    :nth-child(3) {
      margin-top: 20px;
    }
  }
  .drop-down {
    p {
      padding: 0px 4px;
      margin: 10px 0px;
      font-size: 18px;
      color: ${props => props.theme.color.darkGreen};
      font-weight: 600;
      font-family: ${props => props.theme.font.TextFont2};
      cursor: pointer;
    }
  }
`;
