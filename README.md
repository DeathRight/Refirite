<p align="center" dir="auto">
  <a href="https://refirite.voidtavern.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://user-images.githubusercontent.com/7894022/153736169-48003095-e284-49c4-82b2-1ea78aa0776c.png" alt="Refirite logo" style="max-width: 100%;">
  </a>
</p>

# Refirite - Reactfire+Vite

Refirite is a Vite React Typescript template with out-of-the-box Firebase+Firestore implementation, as well as a small, barebones component library built with Radix-UI+Stitches.

It might seem a bit cumbersome, so if you truly want a featherweight skeleton, see the 'react-plus' vite template this was forked from.

## Features

- React 18 (RC) Typescript
- React-Router-Dom
- Reactfire
- Radix-UI, Radix-Icons (with a handful of basic components)
- Stitches (light/dark theme toggle pre-implemented)
- Prettier
- Husky
- ESLint

## Quickstart

Minimal setup required! (Isn't that the point?) The only thing you have to do is replace the `root/.env` variables with your own Firebase API variables, and you're done!
If you are confused how to do this, see Reactfire documentation.

There is a Home and About page as a jumping off point for the react-router implementation alongside Reactfire, with the Home page housing the theme toggle and sign-out button, and the About page showcasing a Firestore implementation.

The Auth page is pre-configured for Google, Twitter, and GitHub sign in via Firebase Auth.

Obviously, you will want to customize the theme, so there's a bit to explain in regards to my implementation of the themes:
- I have the primary and accent colors as constants wrapped in a function that removes the default Stitches prefixes for the scales. Why? For seamless shareability between themes.
- On top of that, I have all non-theme tokens in a separate constant that gets spread to the createStitches. (e.g.: spaces, sizes, util)

***One more important note:***
I have a vite svg plugin and Google Icon that it loads as a component for the Google sign in button. Nasty, right? Well, Google is very strict about their branding, and Radix-Icons doesn't have their icon.

If you want to delete it just run:
`pnpm remove vite-plugin-svgr` and then delete the GoogleIcon.svg in /src/assets, as well as reconfigure the Auth page.
However, if you plan to use Radix-Icons and auth via Google, you'll probably just want to keep it.

### Prerequisites

- `npm` and `pnpm` should be installed.
- `git` should be installed (recommended v2.4.11 or higher)

### Available scripts


#### `pnpm dev`

Runs the app in development mode.
Open https://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

#### `pnpm build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
# In-depth
Below is in-depth information for customization, what this template includes, and how it's setup.

## Stitches
All stitches configuration is done in `root/stitches.config`

### Non-theme tokens
If you want to edit things like the media and utils tokens, edit the `createStitches` paramater near the bottom.
```typescript
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
    ...
  },
  utils: {
    ...
  }
});
```

### Themeing
To customize the theme colors, edit the light/dark Primary/Accent constants so the parameters match your colors:
```typescript
const lightPrimary = replacePrefixFromSteps(mauve, "p") as PrimaryScaleSteps;
const lightAccent = replacePrefixFromSteps(tomato, "a") as AccentScaleSteps;

const darkPrimary = replacePrefixFromSteps(mauveDark, "p") as PrimaryScaleSteps;
const darkAccent = replacePrefixFromSteps(tomatoDark, "a") as AccentScaleSteps;
```

To customize theme tokens other than colors, edit the `shared` constant just below the theme colors constants.
```typescript
const shared = {
  fontSizes: {
    ...
  },
  lineHeights: {
    ...
  },
  ...
};
```

To customize the default theme color tokens, edit the `defaultThemeColors` constant.
```typescript
**
 * All tokens must be defined here, and all themes must match them
 */
const defaultThemeColors = {
  ...lightPrimary,
  ...lightAccent,
  ...blackA,
  ...whiteA,
  // shorthand common tokens
  // main
  hiC: lightPrimary.p12,
  ...
};
```

These token spreaders:
```
  ...lightPrimary,
  ...lightAccent,
  ...blackA,
  ...whiteA,
```
Act as base tokens. `lightPrimary/lightAccent` gets swapped for `darkPrimary/darkAccent` in the dark theme, however, the important thing is that the token keys *do not change* across themes. The primary scales will always be prefixed with `p`, and the accent scales will always be prefixed with `a`.

`blackA` and `whiteA` are radix-ui color scales that do not change between themes and are used for transparent backgrounds, etc. For instance, the blackA scale is used in the `Backdrop` component located at `root/src/components/common/Backdrop.tsx`.

If you aren't too familiar with radix-ui colors and Stitches, I highly recommend you read their documentation, because these libraries are fantastic.

Anyway, the defaultThemeColors will automatically get spread to the lightTheme.
To edit the darkTheme colors... you guessed it:
```typescript
const darkThemeColors = {
  ...darkPrimary,
  ...darkAccent,
  // shorthand common tokens
  // main
  hiC: darkPrimary.p12,
  ...
};
```

And that's it for Stitches themeing! The pre-built `ToggleThemeButton` component and `ThemeContextProvider` context use the lightTheme and darkTheme classes.
If you want to edit the components or provider/context, they are located at:
```
ToggleThemeButton: root/src/components/ToggleThemeButton.tsx | ToggleButton: root/src/components/common/ToggleButton.tsx
theme-context: root/src/contexts/theme-context.ts
ThemeContextProvider: root/src/components/contexts/ThemeContextProvider.tsx
```
