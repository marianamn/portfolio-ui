import * as React from "react";
import styled from "styled-components";
import { ProjectData } from "../../interfaces";
import { Close } from "styled-icons/material/Close";
import Tags from "./tags";
import ImageCarousel from "./carousel";

export const ProjectDetailsContainer = styled("div")`
  background: #ffffff;
  padding: 20px;
  position: relative;
  font-family: RobotoCondensed-Light;
  color: #333333;
  height: 100vh;
`;

export interface ContentProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const Content = styled<ContentProps, "div">("div")`
  width: ${({ isMobile, isTablet }) => (isTablet || isMobile ? "100%" : "80%")};
  margin: 0 auto;
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const CloseBtnContainer = styled<ContentProps, "div">("div")`
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

export const ProjectInfo = styled<ContentProps, "div">("div")`
  width: ${({ isMobile }) => !isMobile && "60%"};
`;

export interface ImageContainerProps {
  readonly imagePath: string;
  readonly isMobile?: boolean;
}

export const ImageContainer = styled<ImageContainerProps, "div">("div")`
  width: ${({ isMobile }) => (isMobile ? "100%" : "40%")};
  height: ${({ isMobile }) => isMobile && "200px"};
  background: ${({ imagePath }) => `url(${imagePath}) no-repeat`};
  background-position: center;
  background-size: contain;
`;

export const ProjectName = styled("h3")`
  font-size: 1.875em;
  margin: 0.5em 0;
`;

export const ProjectDescription = styled("div")`
  font-size: 0.875em;
  margin: 3em 0;
`;

interface Props {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly projectDetails: ProjectData;
  readonly toggleShowProjectDetails: () => void;
}

interface StateProps {}

export default class ProjectDetails extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    return (
      <ProjectDetailsContainer>
        <Content isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
          <ProjectInfo isMobile={this.props.isMobile}>
            <ProjectName>{this.props.projectDetails.name}</ProjectName>
            <Tags tags={this.props.projectDetails.tags} />
            {this.props.isMobile && (
              <ImageContainer
                isMobile={this.props.isMobile}
                imagePath={this.props.projectDetails.images[0]}
              />
            )}
            <ProjectDescription>{this.props.projectDetails.description}</ProjectDescription>
            <ImageCarousel images={this.props.projectDetails.images} />
          </ProjectInfo>

          {!this.props.isMobile && (
            <ImageContainer
              isMobile={this.props.isMobile}
              imagePath={this.props.projectDetails.images[0]}
            />
          )}
        </Content>

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
