import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;
  margin-bottom: 50px;
  h2 {
    font-size: 50px;
  }

  .swiper-button-prev {
    color: ${props => props.theme.color.darkGreen};
    @media screen and (max-width: 600px) {
      :after {
        font-size: 16px;
      }
    }
  }
  .swiper-button-next {
    color: ${props => props.theme.color.darkGreen};
    @media screen and (max-width: 600px) {
      :after {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
  }
`;
