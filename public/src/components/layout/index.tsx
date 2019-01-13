import * as React from "react";
import * as ReactDOM from "react-dom";
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
  readonly isLoading: boolean;
  readonly isProjectLoading: boolean;
  readonly containerWidth: number;
  readonly showProjectDetails: boolean;
  readonly projectDetails: ProjectData;
}

export default class Layout extends React.Component<Props, State> {
  private projectsRef: any;
  private projectsDetailsRef: any
  private biographyRef: any
  private interestsRef: any;
  private topRef: any;

  // tslint:disable-next-line:member-ordering
  constructor(props: Props, state: State) {
    super(props, state);
    this.topRef = React.createRef();
    this.projectsRef = React.createRef();
    this.projectsDetailsRef = React.createRef();
    this.biographyRef = React.createRef();
    this.interestsRef = React.createRef();
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

  handleScrollToElement = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }

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
          ref={this.topRef}
        />

        {!this.state.showProjectDetails ? (
          <div ref={this.projectsRef}>
            <PortfolioSection
              isMobile={isMobile}
              isTablet={isTablet}
              projects={projects}
              toggleShowProjectDetails={this.toggleShowProjectDetails}
              getProjectDetails={this.getProjectDetails}
            />
          </div>
        ) : this.state.isProjectLoading ? (
          <Loading position="relative" height="400px" />
        ) : (
              <div ref={this.projectsDetailsRef}>
                <ProjectDetails
                  isMobile={isMobile}
                  isTablet={isTablet}
                  toggleShowProjectDetails={this.toggleShowProjectDetails}
                  projectDetails={this.state.projectDetails}
                />
              </div>
            )}
        <div ref={this.biographyRef}>
          <BiographySection
            isMobile={isMobile}
            isTablet={isTablet}
            biography={biography}
          />
        </div>
        <div ref={this.interestsRef}>
          <InterestsSection
            isMobile={isMobile}
            isTablet={isTablet}
            interests={interests}
          />
        </div>

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

  private readonly scrollToElement = (id: string): void => {
    switch (id) {
      case "projects":
        break;
      case "project-details":
        this.handleScrollToElement(this.projectsDetailsRef);
        break;
      case "biography":
        this.handleScrollToElement(this.biographyRef);
        break;
      case "interests":
        this.handleScrollToElement(this.interestsRef);
        break;
      case "top":
        this.handleScrollToElement(this.topRef);
        break;
      default:
        break;
    }
  };
}
