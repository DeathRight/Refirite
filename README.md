# Refirite - Reactfire+Vite

Refirite is a Vite React Typescript template with out-of-the-box Firebase+Firestore implementation, as well as a small, barebones component library built with Radix-UI+Stitches.

It might seem a bit cumbersome, so if you truly want a featherweight skeleton, see the 'react-plus' vite template this was forked from.

## Features

- React 18 (RC) Typescript
- React-Router
- Reactfire
- Radix-UI, Radix-Icons (with a handful of basic components)
- Stitches (light/dark theme toggle pre-implemented)
- Prettier
- Husky
- ESLint

## Setup

Minimal setup required! (Isn't that the point?) The only thing you have to do is replace the .env variables with your own Firebase API variables, and you're done!

There is a Home and About page as a jumping off point for the react-router implementation alongside Reactfire, with the Home page housing the theme toggle and sign-out button, and the About page showcasing a Firestore implementation.

The Auth page is pre-configured for Google, Twitter, and GitHub sign in via Firebase Auth.

Obviously, you will want to customize the theme, so there's a bit to explain in regards to my implementation of the themes:
- I have the primary and accent colors as constants wrapped in a function that removes the default Stitches prefixes for the scales. Why? For seamless shareability between themes.
- On top of that, I have all non-theme tokens in a separate constant that gets spread to the dark/light themes. (e.g.: spaces, sizes, util) Again, for seamless shareability between themes.

***One more important note:***
I have a vite svg plugin and Google Icon that it loads as a component for the Google sign in button. Nasty, right? Well, Google is very strict about their branding, and Radix-Icons doesn't have their icon.

If you want to delete it just run:
`pnpm remove vite-plugin-svgr`
...and then delete the GoogleIcon.svg in /src/assets, as well as reconfigure the Auth page.
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
