import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 500px; */

  .swiper {
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
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
      visibility: hidden;
    }
  }
  .swiper-button-prev {
    color: ${props => props.theme.color.mainGreen};
    @media screen and (max-width: 600px) {
      visibility: hidden;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
