import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);

  img {
    z-index: -2;
  }

  .gradation {
    opacity: 0.45;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
  }

  .survey-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 1000px;
    aspect-ratio: 16 / 12;
    top: 50%;
    left: 50%;
    z-index: 1;
    border-radius: 10px;
    color: ${props => props.theme.color.ivoryHover};
    background-color: rgba(48, 48, 48, 0.8);

    .survey {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 80px 1fr;

      .dots {
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media screen and (${props => props.theme.mobile}) {
    position: relative;
    width: 100%;
    min-width: 0px;

    .survey-wrapper {
      aspect-ratio: 8 / 10;
      min-width: 0px;
      width: 95%;
    }
  }
`;
