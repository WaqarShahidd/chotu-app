import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// const CARD_HEIGHT = sizes.height / 2.5;
// const CARD_WIDTH = sizes.width - 100;
// const CARD_SPACING = CARD_HEIGHT / 2 + spacing.l;

export const colors = {
  primary: "#03B602",
  secondary: "#FE4B3F",

  textPrimary: "#131A2E",
  textSecondary: "#8D8C8C",
  textThree: "#4a4a4a",

  borderColor: "#131A2E33",
  grey2: "#ececec",

  white: "#fff",
  white2: "#ffffff80",

  trans: "transparent",
};

export const shadow = {
  light: {
    elevation: 1,
    shadowColor: colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 0,
    },
  },
  dark: {
    elevation: 3,
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  subTitle: 10,
  h1: 20,
  h2: 24,
  h3: 18,
  body: 14,
  radius: 20,
  bold: "700",
  semiBold: "600",
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
  top: 20.5,
};

export const fontStyle = {
  x: "700",
  md: "600",
};
