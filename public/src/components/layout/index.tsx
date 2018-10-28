import * as React from "react";
import styled from "styled-components";
import { ChevronCircleUp } from "styled-icons/fa-solid/ChevronCircleUp";
import { mobileResolution } from "../../constants";
import HeaderSection from "../header/index";
import PortfolioSection from "../portfolio/index";
import BiographySection from "../biography/index";
import InterestsSection from "../interests/index";
import Footer from "../footer/";

const scrollToComponent = require("react-scroll-to-component");

export const MainLayout = styled("div")`
  position: relative;
`;

export const ScrollToTop = styled("div")`
  position: fixed;
  right: 10px;
  bottom: 15px;
  width: 30px;
  height: 30px;
  color: #7acec3;

  &:hover {
    cursor: pointer;
    color: #70bab1;
  }
`;

interface Props { }

interface State {
  readonly containerWidth: number;
}

export default class Layout extends React.Component<Props, State> {
  private projectsRef: {};
  private biographyRef: {};
  private interestsRef: {};
  private topRef: {};

  // tslint:disable-next-line:member-ordering
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = { containerWidth: 0 };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;

    return (
      <MainLayout>
        <HeaderSection
          isMobile={isMobile}
          scrollToElement={this.scrollToElement}
          ref={section => { this.topRef = section; }}
        />

        <PortfolioSection ref={section => { this.projectsRef = section; }} />
        <BiographySection ref={section => { this.biographyRef = section; }} />
        <InterestsSection ref={section => { this.interestsRef = section; }} />
        <Footer />

        {/* tslint:disable-next-line:jsx-no-lambda */}
        <ScrollToTop onClick={() => this.scrollToElement("top")}>
          <ChevronCircleUp />
        </ScrollToTop>
      </MainLayout>
    );
  }

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: window.innerWidth });
  };

  private readonly scrollToElement = (id: string): void => {
    switch (id) {
      case "projects":
        scrollToComponent(this.projectsRef, { offset: 0, align: "middle", duration: 1500, ease: "inCirc" });
        break;
      case "biography":
        scrollToComponent(this.biographyRef, { offset: 30, align: "middle", duration: 1500, ease: "inCirc" });
        break;
      case "interests":
        scrollToComponent(this.interestsRef, { offset: 0, align: "middle", duration: 1500, ease: "inCirc" });
        break;
      case
        "top": scrollToComponent(this.topRef, { offset: 0, align: "middle", duration: 500, ease: "inExpo" });
        break;
      default: break;
    }
  };
}
