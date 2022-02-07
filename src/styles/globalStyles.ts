import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "$appBg",
    color: "$hiC",
    lineHeight: "$1",
    fontSize: "$sm",
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
  },
});

export default globalStyles;
