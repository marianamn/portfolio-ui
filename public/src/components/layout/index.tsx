import * as React from "react";
import styled from "styled-components";
import { ChevronCircleUp } from "styled-icons/fa-solid/ChevronCircleUp";
import {
  mobileResolution,
  tabletResolution,
  projects,
  biography,
  interests,
} from "../../constants";
import Loading from "../common/loadings";
import HeaderSection from "../header/index";
import PortfolioSection from "../portfolio/index";
import BiographySection from "../biography/index";
import InterestsSection from "../interests/index";
import Footer from "../footer/";
import ProjectDetails from "../portfolio/project-details";
import { ProjectData } from "../../interfaces";

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

interface Props {}

interface State {
  readonly isLoading: boolean;
  readonly isProjectLoading: boolean;
  readonly containerWidth: number;
  readonly showProjectDetails: boolean;
  readonly projectDetails: ProjectData;
}

export default class Layout extends React.Component<Props, State> {
  private projectsRef: {};
  private projectsDetailsRef: {};
  private biographyRef: {};
  private interestsRef: {};
  private topRef: {};

  // tslint:disable-next-line:member-ordering
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      isLoading: true,
      isProjectLoading: false,
      containerWidth: 0,
      showProjectDetails: false,
      projectDetails: {
        id: "",
        name: "",
        technologies: "",
        description: "",
        tags: [],
        images: [],
        period: "",
        url: "",
        repositoryUrl: [],
      },
    };
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  isImageLoaded = (loaded: boolean) => {
    this.setState({ isLoading: loaded });
  };

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return (
      <MainLayout>
        {this.state.isLoading && <Loading position="fixed" height="100vh" />}

        <HeaderSection
          isMobile={isMobile}
          scrollToElement={this.scrollToElement}
          isImageLoaded={this.isImageLoaded}
          ref={section => (this.topRef = section)}
        />

        {!this.state.showProjectDetails ? (
          <PortfolioSection
            isMobile={isMobile}
            isTablet={isTablet}
            projects={projects}
            toggleShowProjectDetails={this.toggleShowProjectDetails}
            getProjectDetails={this.getProjectDetails}
            ref={section => (this.projectsRef = section)}
          />
        ) : this.state.isProjectLoading ? (
          <Loading position="relative" height="400px" />
        ) : (
          <ProjectDetails
            isMobile={isMobile}
            isTablet={isTablet}
            toggleShowProjectDetails={this.toggleShowProjectDetails}
            projectDetails={this.state.projectDetails}
            ref={section => (this.projectsDetailsRef = section)}
          />
        )}

        <BiographySection
          isMobile={isMobile}
          isTablet={isTablet}
          biography={biography}
          ref={section => (this.biographyRef = section)}
        />
        <InterestsSection
          isMobile={isMobile}
          isTablet={isTablet}
          interests={interests}
          ref={section => (this.interestsRef = section)}
        />
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

  private readonly toggleShowProjectDetails = (): void => {
    this.setState({ showProjectDetails: !this.state.showProjectDetails }, () => {
      if (this.state.showProjectDetails) {
        this.scrollToElement("project-details");
      }
    });
  };

  private readonly getProjectDetails = (id: string): void => {
    this.setState({ isProjectLoading: true });
    const project = projects.filter((p: ProjectData) => p.id === id)[0];
    this.setState({
      projectDetails: project,
      isProjectLoading: false,
    });
  };

  private readonly scrollToElement = (id: string, isMobile?: boolean): void => {
    switch (id) {
      case "projects":
        scrollToComponent(this.projectsRef, {
          offset: isMobile ? -132 : 0,
          align: "top",
          duration: 500,
          ease: "inCirc",
        });
        break;
      case "project-details":
        scrollToComponent(this.projectsDetailsRef, {
          offset: 0,
          align: "top",
          duration: 500,
          ease: "inCirc",
        });
        break;
      case "biography":
        scrollToComponent(this.biographyRef, {
          offset: isMobile ? -132 : 0,
          align: "top",
          duration: 500,
          ease: "inCirc",
        });
        break;
      case "interests":
        scrollToComponent(this.interestsRef, {
          offset: isMobile ? -132 : 0,
          align: "top",
          duration: 500,
          ease: "inCirc",
        });
        break;
      case "top":
        scrollToComponent(this.topRef, {
          offset: 0,
          align: "top",
          duration: 500,
          ease: "inExpo",
        });
        break;
      default:
        break;
    }
  };
}
