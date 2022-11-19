import { motion } from "framer-motion";
import styled from "styled-components";
import Plant1 from "../../assets/commerce/plants/plant1.jpg";
export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  height: 80px;
  top: 0;
  background-color: #fafafa;
  z-index: 999;
  .wrapper {
    margin: auto;
    width: 100%;
    max-width: 1500px;

    height: 100%;

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;

    font-family: ${props => props.theme.font.EnglishFont};
    font-size: 18px;
  }
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    color: ${props => props.theme.color.darkGreen};
    font-size: 40px;
  }

  .menu-wrap {
    display: flex;
    height: 100%;
    gap: 50px;
    font-size: 18px;
    color: ${props => props.theme.color.black};

    a {
      display: flex;
      align-items: center;
      height: 100%;
    }
    div {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  .img-wrap {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
      path {
        fill: transparent;
        stroke: ${props => props.theme.color.darkGreen};
        stroke-width: 3;
      }
      :nth-child(1) {
        width: 20px;
        height: 20px;
        path {
          fill: ${props => props.theme.color.darkGreen};
          stroke-width: 0.1;
        }
      }
      :nth-child(3) {
        width: 20px;
        height: 20px;
      }
    }
    .bag-wrap {
      position: relative;
      span {
        position: absolute;
        right: 0;
        top: -10px;
        background-color: #fbc531;
        width: 18px;
        height: 18px;
        display: flex;
        border-radius: 9px;
        justify-content: center;
        align-items: center;
        font-family: ${props => props.theme.font.TitleFont};
        color: ${props => props.theme.color.mainGreen};
        font-size: 12px;
      }
      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
        path {
          fill: transparent;
          stroke: ${props => props.theme.color.darkGreen};
          stroke-width: 3;
        }
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
    display: none;
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

  @media screen and (max-width: 1024px) {
    .img-wrap {
      padding-right: 0px;
      display: flex;
      gap: 30px;
      justify-content: flex-end;
      align-items: center;
      svg {
        :nth-child(1) {
          display: none;
        }
        :nth-child(3) {
          display: none;
        }
      }
    }
    .wrapper {
      padding: 0px 40px;
    }

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
    .icon-wrapper {
      display: flex;
      align-items: center;
    }

    .menu-wrap {
      display: none;
    }
    .img_wrap {
      height: 100%;
      width: 100px;
      gap: 20px;
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

  @media screen and (max-width: 600px) {
    .img-wrap {
      padding-right: 0px;
    }
    .wrapper {
      padding: 0px 10px;
    }
  }
`;

export const Slider = styled(motion.div)`
  padding: 20px;
  top: 80px;
  transform: translateX(-100%);
  opacity: 1;
  position: fixed;
  background-color: #fafafa;
  z-index: 999;
  width: 100%;
  height: calc(100vh - 80px);
  .menu {
    z-index: 10;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .title {
    z-index: 2;
    width: 100%;
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
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      padding-left: 10px;
      margin: 10px 0px 0px;
      font-size: 18px;
      color: ${props => props.theme.color.darkGreen};
      font-weight: 600;
      font-family: ${props => props.theme.font.TextFont2};
      cursor: pointer;
    }

    span {
      cursor: pointer;
      padding-left: 20px;
      font-family: ${props => props.theme.font.TextFont2};
      font-size: 15px;
      color: ${props => props.theme.color.darkGreen};
      svg {
        display: inline;
        fill: ${props => props.theme.color.darkGreen};

        width: 5px;
        height: 5px;
      }
    }
  }
`;

export const ShopHoverNav = styled(motion.div)`
  margin: auto;
  width: 100%;
  height: 320px;
  z-index: 1;
  max-width: 1500px;
  position: sticky;
  background-color: #fafafa;

  .grid-wrapper {
    padding: 10px 40px 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 30px;
    grid-row-gap: 20px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 1.5fr 1.5fr;

    .gird-left {
      width: 100%;
      height: 100%;
      position: relative;
      grid-area: 1 / 1 / 4 / 2;
    }

    .grid-bottom {
      cursor: pointer;
      margin: auto;
      width: 100%;
      height: 100%;
      position: relative;
      grid-area: 3 / 2 / 4 / 4;
      overflow: hidden;
      transition: all linear 0.1s;

      .contents {
        display: flex;
        align-items: center;
        height: 100%;
        background: linear-gradient(
          21deg,
          rgba(25, 25, 25, 1) 0%,
          rgba(0, 212, 255, 0) 100%
        );
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        h1 {
          width: 100%;
          text-shadow: 2px 2px 2px black;
          text-align: center;
          color: ${props => props.theme.color.whiteGray};
          font-family: ${props => props.theme.font.TextFont2};
          font-size: 24px;

          span {
            color: #ffc800;
          }
        }
      }
    }

    h3 {
      top: 20px;
      left: 30px;
      font-size: 40px;
      letter-spacing: 1px;
      position: absolute;
      font-family: ${props => props.theme.font.EnglishFont};
    }

    p {
      top: 90px;
      left: 35px;

      font-size: 20px;
      letter-spacing: 1px;
      position: absolute;
      font-family: ${props => props.theme.font.TextFont2};
    }
    .button {
      background-color: black;
      cursor: pointer;
      width: 90%;
      height: 40px;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, 0);
      color: #e8e8e4;
      font-size: 20px;
      letter-spacing: 1px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
