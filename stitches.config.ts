import {
  AccentScaleSteps,
  PrimaryScaleSteps,
  replacePrefixFromSteps,
} from "@app/util/stitches";
import {
  amber,
  crimson,
  cyan,
  grass,
  mauve,
  mauveDark,
  tomato,
  tomatoDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

/* ------------------------- Primary & Accent Colors ------------------------ */
const lightPrimary = replacePrefixFromSteps(mauve, "p") as PrimaryScaleSteps;
const lightAccent = replacePrefixFromSteps(tomato, "a") as AccentScaleSteps;

const darkPrimary = replacePrefixFromSteps(mauveDark, "p") as PrimaryScaleSteps;
const darkAccent = replacePrefixFromSteps(tomatoDark, "a") as AccentScaleSteps;
/* -------------------------- Shared Theme Options -------------------------- */
/**
 * All theme config options to be shared across themes besides `colors` should go here
 */
const shared = {
  fontSizes: {
    xs: "11px", //subscript
    sm: "13px", //normal
    md: "15px", //attention
    lg: "18px", //subheading
    xl: "22px", //heading
    xxl: "28px", //subtitle
    xxxl: "32px", //title
  },
  lineHeights: {
    1: "18px",
  },
  space: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px",
  },
  sizes: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px",
  },
  borderWidths: {
    1: "2px",
    2: "4px",
    3: "6px",
    4: "8px",
  },
  radii: {
    1: "4px",
    2: "6px",
    3: "8px",
    4: "12px",
    round: "50%",
    pill: "9999px",
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999",
  },
  shadows: {
    1: "0 4px 8px 0 rgba(0,0,0,0.2)",
    2: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
};

/**
 * Colors to be shared across themes
 */
const sharedColors = {
  //error
  error: crimson.crimson4,
  errorHover: crimson.crimson5,
  errorSelect: crimson.crimson6,
  errorInactive: crimson.crimson2,
  errorInactiveA: crimson.crimson7,
  errorA: crimson.crimson9,
  errorHiC: crimson.crimson12,
  errorLoC: crimson.crimson11,
  //success
  success: grass.grass4,
  successHover: grass.grass5,
  successSelect: grass.grass6,
  successInactive: grass.grass2,
  successInactiveA: grass.grass7,
  successA: grass.grass9,
  successHiC: grass.grass12,
  successLoC: grass.grass11,
  //info
  info: cyan.cyan4,
  infoHover: cyan.cyan5,
  infoSelect: cyan.cyan6,
  infoInactive: cyan.cyan2,
  infoInactiveA: cyan.cyan7,
  infoA: cyan.cyan9,
  infoHiC: cyan.cyan12,
  infoLoC: cyan.cyan11,
  //warn
  warn: amber.amber4,
  warnHover: amber.amber5,
  warnSelect: amber.amber6,
  warnInactive: amber.amber2,
  warnInactiveA: amber.amber7,
  warnA: amber.amber9,
  warnHiC: amber.amber12,
  warnLoC: amber.amber11,
};

/* ---------------------- Default (light) Theme Colors ---------------------- */
/**
 * All tokens must be defined here and in sharedColors, and all themes must match them
 */
const defaultThemeColors = {
  ...lightPrimary,
  ...lightAccent,
  // shorthand common tokens
  // main
  hiC: lightPrimary.p12,
  loC: lightPrimary.p11,
  appBg: lightPrimary.p1,
  cardBg: lightPrimary.p2,
  logo: lightAccent.a9,
  link: lightAccent.a9,
  linkHover: lightAccent.a10,
  linkSelect: lightAccent.a11,
  visited: lightPrimary.p9,
  visitedHover: lightPrimary.p10,
  visitedSelect: lightPrimary.p11,
  // header text
  h: lightAccent.a10,
  // component
  inactive: lightPrimary.p3,
  active: lightAccent.a3,
  hover: lightAccent.a4,
  select: lightAccent.a5,
  // attention (call to action)
  attActive: lightAccent.a4,
  attHover: lightAccent.a5,
  attSelect: lightAccent.a6,
  attA: lightAccent.a9,
  attHiC: lightAccent.a12,
  attLoC: lightAccent.a11,
  ...sharedColors,
};
/* ----------------------------- createStitches ----------------------------- */
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: defaultThemeColors,
    ...shared,
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string) => ({
      borderRadius: value,
    }),
  },
});
/* ----------------------------- Theme Creators ----------------------------- */
export const lightTheme = createTheme("light-theme", {
  colors: defaultThemeColors,
});
export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...darkPrimary,
    ...darkAccent,
    // shorthand common tokens
    // main
    hiC: darkPrimary.p12,
    loC: darkPrimary.p11,
    appBg: darkPrimary.p1,
    cardBg: darkPrimary.p2,
    logo: darkAccent.a9,
    link: darkAccent.a9,
    linkHover: darkAccent.a10,
    linkSelect: darkAccent.a11,
    visited: darkPrimary.p9,
    visitedHover: darkPrimary.p10,
    visitedSelect: darkPrimary.p11,
    // header text
    h: darkAccent.a10,
    // component
    inactive: darkPrimary.p3,
    active: darkAccent.a3,
    hover: darkAccent.a4,
    select: darkAccent.a5,
    // attention (call to action)
    attActive: darkAccent.a4,
    attHover: darkAccent.a5,
    attSelect: darkAccent.a6,
    attA: darkAccent.a9,
    attHiC: darkAccent.a12,
    attLoC: darkAccent.a11,
    ...sharedColors,
  } as typeof defaultThemeColors,
});
