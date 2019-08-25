import * as React from "react";
import * as smoothScroll from "smoothscroll-polyfill";
import styled from "styled-components";
import { ChevronCircleUp } from "styled-icons/fa-solid/ChevronCircleUp";

import {
  biography,
  interests,
  mobileResolution,
  projects,
  tabletResolution,
} from "../../constants";
import { ProjectData } from "../../interfaces";
import BiographySection from "../biography";
import Loading from "../common/loadings";
import Footer from "../footer/";
import HeaderSection from "../header";
import InterestsSection from "../interests";
import PortfolioSection from "../portfolio";
import ProjectDetails from "../portfolio/project-details";

smoothScroll.polyfill();

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

interface DetailsProps {
  readonly isProjectLoading: boolean;
}

export const Details = styled.div<DetailsProps>`
  height: ${({ isProjectLoading }) => isProjectLoading && "400px"};
  overflow-y: ${({ isProjectLoading }) => isProjectLoading && "hidden"};
`;

interface State {
  readonly isLoading: boolean;
  readonly isProjectLoading: boolean;
  readonly containerWidth: number;
  readonly showProjectDetails: boolean;
  readonly projectDetails: ProjectData;
}

export default class Layout extends React.Component<{}, State> {
  private readonly projectsRef: any;
  private readonly projectsDetailsRef: any;
  private readonly biographyRef: any;
  private readonly interestsRef: any;
  private readonly topRef: any;

  // tslint:disable-next-line:member-ordering
  constructor(props: {}, state: State) {
    super(props, state);
    this.topRef = React.createRef();
    this.projectsRef = React.createRef();
    this.projectsDetailsRef = React.createRef();
    this.biographyRef = React.createRef();
    this.interestsRef = React.createRef();

    this.state = {
      isLoading: true,
      isProjectLoading: true,
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

  render(): JSX.Element {
    const isMobile = this.state.containerWidth <= mobileResolution;
    const isTablet =
      this.state.containerWidth > mobileResolution && this.state.containerWidth <= tabletResolution;

    return (
      <MainLayout>
        {this.state.isLoading && <Loading position="fixed" height="100vh" />}

        <div ref={this.topRef}>
          <HeaderSection
            isMobile={isMobile}
            scrollToElement={this.scrollToElement}
            isImageLoaded={this.isImageLoaded}
          />
        </div>

        {/* On Project details click hide Project section and show Project details */}
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
        ) : (
          <div ref={this.projectsDetailsRef}>
            {this.state.isProjectLoading && <Loading position="absolute" height="400px" />}

            <Details isProjectLoading={this.state.isProjectLoading}>
              <ProjectDetails
                isMobile={isMobile}
                isTablet={isTablet}
                toggleShowProjectDetails={this.toggleShowProjectDetails}
                projectDetails={this.state.projectDetails}
                areImagesLoaded={this.areImagesLoaded}
              />
            </Details>
          </div>
        )}

        <div ref={this.biographyRef}>
          <BiographySection isMobile={isMobile} isTablet={isTablet} biography={biography} />
        </div>

        <div ref={this.interestsRef}>
          <InterestsSection isMobile={isMobile} isTablet={isTablet} interests={interests} />
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

  // Is personal image loaded - show spinner meanwhile
  private readonly isImageLoaded = (loaded: boolean) => {
    this.setState({ isLoading: loaded });
  };

  // When open product details checks if all images are loaded - show spinner meanwhile
  private readonly areImagesLoaded = (imagesLoaded: boolean): void => {
    this.setState({ isProjectLoading: !imagesLoaded });
  };

  private readonly getProjectDetails = (id: string): void => {
    const project = projects.filter((p: ProjectData) => p.id === id)[0];
    this.setState({
      projectDetails: project,
    });
  };

  // Handle scroll to element logic
  private readonly handleScrollToElement = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
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
