import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  nav: "#0f0c3b",
  grey: "#E0E0E0",
  primary: "#0f0c3b" /*  "#aa8929", */,
  primaryBright: "#696969",
  primaryDark: "#000000",
  secondary: "#E5E4E2" /* "#FFA500"     ,           /* "#7645D9", */,
  buttonHover: "#A0A0A0",
  itemHover: "#A0A0A0",
  success: "#0f0c3b" /*  "#F3E5AB", */,
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#E5E4E2" /*  "#343135"   "#FAF9FA", */,
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#787878",
  tertiary: "#FFFFFF" /* "#EFF4F5", */,
  text: "#E5E4E2" /* "#EAE2FC",   "#452A7A",  */,
  textDisabled: "#BDC2C4",
  textSubtle: "#E5E4E2" /* "#8f80ba", */,
  borderColor: "#E9EAEB",
  card: "#00498D" /* "linear-gradient(#020024,#091678)", */ /* "#FFFFFF" */,
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
