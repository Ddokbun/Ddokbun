import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "600px",
};

export const Theme: DefaultTheme = {
  mobile: `(max-width:${deviceSize.mobile})`,
};
