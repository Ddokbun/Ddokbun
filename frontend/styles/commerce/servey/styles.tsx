import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);

  img {
    z-index: -1;
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

  .servey-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;
