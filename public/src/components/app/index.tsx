import * as React from "react";
import { injectGlobal } from "styled-components";
import Layout from "../layout/index";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
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
    src: url("assets/fonts/RobotoCondensed-Italic.ttff") format("opentype");
  }

  @font-face {
    font-family: RobotoCondensed-Bold;
    src: url("assets/fonts/RobotoCondensed-Bold.ttf") format("opentype");
  }

  @font-face {
    font-family: RobotoCondensed-Light;
    src: url("assets/fonts/RobotoCondensed-Light.ttf") format("opentype");
  }

  body {
    padding: 0;
    margin: 0;
    font-family: RobotoCondensed-Regular, sans-serif;
    font-size: 16px;
  }

  p {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }
`;

interface Props { }
interface State { }

export default class App extends React.Component<Props, State> {

  render(): JSX.Element {
    return (
      <Layout />
    );
  }
}
