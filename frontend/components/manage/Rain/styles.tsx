import styled from "styled-components";

interface Props {
  offset: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const EmojiContainer = styled.div<Props>`
  @keyframes falldown {
    0% {
      margin-top: 0;
    }
    100% {
      margin-top: 400px;
    }
  }

  position: absolute;
  top: 50px;
  left: ${props => props.offset}px;

  font-size: 24px;
  animation-name: falldown;
  animation-duration: 4s;
`;
