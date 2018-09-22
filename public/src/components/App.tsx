import * as React from "react";
import styled, { injectGlobal } from "styled-components";

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
    font-family: Roboto-Regular, sans-serif;
  }
`;

export const Title = styled("h2")`
  color: #003764;
`;

export const Logo = styled("img")`
  width: 280px;
  height: 180px;
`;

interface Props {
  readonly name: string;
}

export default class App extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div>
        <Logo src="assets/images/logo.jpg" />
        <Title>Hello {this.props.name}</Title>
      </div>
    );
  }
}
