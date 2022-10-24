import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "600px",
};

export const Theme: DefaultTheme = {
  mobile: `(max-width:${deviceSize.mobile})`,
  color: {
    mainGreen: "#43855C",
    darkGreen: "#4E6C50",
    black: "#395144",
    brown: "#AA8B56",
    ivory: "#F0EBCE",
  },
};
