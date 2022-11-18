import styled from "styled-components";

interface DotStyleProps {
  now: boolean;
}

export const Wrapper = styled.div<DotStyleProps>`
  width: 20px;
  svg {
    fill: ${props =>
      props.now ? props.theme.color.mainGreen : props.theme.color.ivory};
    scale: ${props => (props.now ? "0.7" : "0.5")};
  }
`;
