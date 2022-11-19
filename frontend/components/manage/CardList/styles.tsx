import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.ul)`
  display: flex;
  justify-content: center;
  margin: 2%;
  width: 100%;

  .swiper {
    width: 100%;
    height: 500px;
    overflow-x: hidden !important;
    display: flex;
    justify-content: center;
  }

  .swiper-slide {
    text-align: center;
    background: none;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button-next {
    color: ${props => props.theme.color.mainGreen};
    @media screen and (max-width: 600px) {
      :after {
        font-size: 12px;
      }
    }
  }
  .swiper-button-prev {
    color: ${props => props.theme.color.mainGreen};
    @media screen and (max-width: 600px) {
      :after {
        font-size: 12px;
      }
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .plant-add-container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 300px;
    height: 300px;
    display: flex;
    border-radius: 50%;
    background: ${props => props.theme.color.darkGray};
    font-family: ${props => props.theme.font.TextFont2};
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    justify-content: center;
    margin: 3%;

    :hover {
      background: ${props => props.theme.color.whiteGray};
      transform: scale(1.15);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }

    &:after,
    &:before {
      content: "";
      display: block;
      background-color: grey;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:before {
      height: 1em;
      width: 0.2em;
    }

    &:after {
      height: 0.2em;
      width: 1em;
    }
    font-size: 80px;
  }
`;
