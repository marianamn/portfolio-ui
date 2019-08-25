import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    @font-face {
      font-family: Roboto-Regular;
      src: url("assets/fonts/Roboto-Regular.ttf") format("opentype");
    }

    @font-face {
      font-family: RobotoCondensed-Regular;
      src: url("assets/fonts/RobotoCondensed-Regular.ttf") format("opentype");
    }

    @font-face {
      font-family: RobotoCondensed-Italic;
      src: url("assets/fonts/RobotoCondensed-Italic.ttf") format("opentype");
    }

    @font-face {
      font-family: RobotoCondensed-Bold;
      src: url("assets/fonts/RobotoCondensed-Bold.ttf") format("opentype");
    }

    @font-face {
      font-family: RobotoCondensed-Light;
      src: url("assets/fonts/RobotoCondensed-Light.ttf") format("opentype");
    }

    padding: 0;
    margin: 0;
    font-family: RobotoCondensed-Regular, sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    overflow-x: hidden;

    p {
      margin: 0;
    }

    @media only screen and (max-width: 600px) {
      body {
        font-size: 14px;
      }
    }
  }
`;
