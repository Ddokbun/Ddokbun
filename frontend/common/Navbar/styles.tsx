import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  @media screen and (${props => props.theme.mobile}) {
    .m_logo {
      color: ${props => props.theme.color.ivory};
      font-size: 30px;
    }

    .m_img_wrap {
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .m_bag {
      width: 50px;
      height: 50px;
      fill: ${props => props.theme.color.ivory};
      stroke: ${props => props.theme.color.ivory};
    }

    .m_left_arrow {
      width: 50px;
      height: 50px;
      fill: ${props => props.theme.color.ivory};
    }
  }
`;
