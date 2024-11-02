const fontGenerator = (
  fontFamily,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    default: "#000000",
    white: "#FFFFFF",
    black: "#000000",
  },

  fonts: {
    default: fontGenerator("GowunDodum", "1rem", "400", "1.5", "normal"),

    GowunDodum: fontGenerator("GowunDodum"),
  },
};
