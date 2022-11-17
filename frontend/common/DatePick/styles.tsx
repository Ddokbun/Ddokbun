import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const Wrapper = styled.div`
  /* position: absolute;
  right: 0px;
  top: 70%;
  z-index: 2; */
`;

export const DatePickerWrapper = styled(ReactDatePicker)`
  width: 100%;
  /* margin-bottom: 10%; */
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.theme.color.ivory};
  background-color: #fafafa;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
