import { ProjectData } from "@portfolio-models/project";
import * as React from "react";
import styled from "styled-components";
import { Close } from "styled-icons/material/Close";

import ImageCarousel from "./carousel";
import Tags from "./tags";

export interface ContentProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}
export const ProjectDetailsContainer = styled("div")`
  background: #ffffff;
  padding: 20px;
  position: relative;
  font-family: RobotoCondensed-Light;
  color: #333333;
`;

export const Content = styled.div<ContentProps>`
  width: ${({ isMobile, isTablet }) => (isTablet || isMobile ? "100%" : "85%")};
  margin: 0 auto;
  display: flex;
  margin-top: 25px;
`;

export const CloseBtnContainer = styled.div<ContentProps>`
  position: absolute;
  right: 15px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isMobile }) => (isMobile ? "40px" : "60px")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "60px")};
  border: 1px solid black;

  .icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProjectInfo = styled("div")`
  width: 100%;
  margin-right: 20px;

  a {
    color: #333333;
    text-decoration: none;
  }
`;

export interface ImageContainerProps {
  readonly imagePath: string;
  readonly isMobile?: boolean;
}

export const ProjectName = styled("h3")`
  font-size: 1.875em;
  margin: 0.5em 0;
`;

export const ProjectDescription = styled("div")`
  margin: 2em 0;
`;

export const CarouselContainer = styled.div<ContentProps>`
  width: ${({ isMobile, isTablet }) => (isTablet || isMobile ? "100%" : "85%")};
  margin: 0 auto;
  margin-bottom: 25px;
`;

interface Props {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly projectDetails: ProjectData;
  readonly toggleShowProjectDetails: () => void;
  readonly areImagesLoaded: (imagesLoaded: boolean) => void;
}

interface StateProps {}

export default class ProjectDetails extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    return (
      <ProjectDetailsContainer>
        <Content isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
          <ProjectInfo>
            <ProjectName>{this.props.projectDetails.name}</ProjectName>
            <Tags tags={this.props.projectDetails.tags} />
            {this.props.projectDetails.url && (
              <p>
                <a href={this.props.projectDetails.url} target="_blank">
                  {this.props.projectDetails.url}
                </a>
              </p>
            )}
            <ProjectDescription>{this.props.projectDetails.description}</ProjectDescription>
          </ProjectInfo>
        </Content>

        <CarouselContainer isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
          <ImageCarousel
            images={this.props.projectDetails.images}
            areImagesLoaded={this.props.areImagesLoaded}
          />
        </CarouselContainer>

        <CloseBtnContainer
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.toggleShowProjectDetails()}
          isMobile={this.props.isMobile}
        >
          <Close className="icon" />
        </CloseBtnContainer>
      </ProjectDetailsContainer>
    );
  }
}
