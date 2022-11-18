import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    font-size: 50px;
    margin-left: 7px;
  }
  .card-wrap {
    display: flex;
  }
  .img-wrap {
    margin: 3px;
    width: 100%;
    height: 500px;
    position: relative;
    .font-box {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 10px;
      color: white;
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(
        1deg,
        rgba(25, 25, 25, 1) 0%,
        rgba(0, 212, 255, 0) 40%
      );
      .font {
        text-align: end;
        h3 {
          font-size: 20px;
        }
        h4 {
          font-family: ${props => props.theme.font.TextFont2};
        }
      }
    }
  }

  .swiper {
    display: none;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
      margin-left: 7px;
    }
    .card-wrap {
      display: none;
    }
    .swiper {
      display: block;
    }
    .swiper-button-prev {
      color: ${props => props.theme.color.darkGreen};
      :after {
        font-size: 24px;
      }
    }
    .swiper-button-next {
      color: ${props => props.theme.color.darkGreen};
      :after {
        font-size: 24px;
      }
    }
  }
`;
