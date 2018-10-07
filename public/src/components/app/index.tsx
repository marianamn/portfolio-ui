import * as React from "react";
import styled, { injectGlobal } from "styled-components";
import { mobileResolution } from "../../constants";
import HeaderSection from "../header/index";
import PortfolioSection from "../portfolio/index";
import BiographySection from "../biography/index";
import InterestsSection from "../interests/index";
import Footer from "../footer/";

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

interface Props {}

interface State {
  readonly containerWidth: number;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = { containerWidth: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions(): void {
    this.setState({ containerWidth: window.innerWidth });
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;

    return (
      <div>
        <HeaderSection isMobile={isMobile} />
        {/* <PortfolioSection />
        <BiographySection />
        <InterestsSection />
        <Footer /> */}
      </div>
    );
  }
}
