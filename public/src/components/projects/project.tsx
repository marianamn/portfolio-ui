import { projectContainersCss } from "@portfolio-constants/constants";
import { ProjectData } from "@portfolio-models/project";
import { ProjectContainerStyles } from "@portfolio-models/project-container";
import * as React from "react";
import styled from "styled-components";
import { ArrowRight } from "styled-icons/feather/ArrowRight";

export interface ProjectProps {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly style: ProjectContainerStyles;
  readonly imagePath: string;
}

export const ProjectContainer = styled.div<ProjectProps>`
  width: ${({ isMobile, isTablet, style }) =>
    isMobile ? "100% !important" : isTablet ? "calc(50% - 20px) !important" : `${style.width}`};
  height: ${({ isMobile, isTablet, style }) =>
    isMobile ? "400px !important" : isTablet ? "calc(400px - 20px) !important" : `${style.height}`};
  color: ${({ style }) => `${style.color}`};
  background: ${({ style }) => `${style.background}`};
  margin-top: ${({ isMobile, isTablet, style }) =>
    isMobile || isTablet ? "0 !important" : `${style.marginTop}`};
  padding: 5px 10px;
  font-family: RobotoCondensed-Light;
  display: flex;
  flex-direction: column;

  .image {
    background: ${({ imagePath }) => `url(${imagePath}) no-repeat`};
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
`;

export const DescriptionContainer = styled("div")`
  padding-bottom: 0;
`;

export const ProjectName = styled("h3")`
  font-size: 1.5em;
  margin: 0.5em 0;
`;

export const Row = styled("p")`
  font-size: 0.875em;
  margin-bottom: 0.5em;
`;

export const Label = styled("span")`
  font-weight: bold;
`;

export const VewProject = styled("p")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  margin-bottom: 10px;

  .icon {
    width: 25px;
    height: 25px;
    color: #ebb240;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  readonly containerIndex: number;
  readonly project: ProjectData;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly toggleShowProjectDetails: () => void;
  readonly getProjectDetails: (id: string) => void;
}

interface StateProps {}

export default class Project extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    const index = this.props.containerIndex - 1;
    const style = projectContainersCss[index];

    return (
      <ProjectContainer
        isMobile={this.props.isMobile}
        isTablet={this.props.isTablet}
        style={style}
        imagePath={this.props.project.images[0]}
      >
        <DescriptionContainer>
          <ProjectName>{this.props.project.name}</ProjectName>
          <Row>
            <Label>Tech Stack: </Label>
            {this.props.project.technologies}
          </Row>
          <Row>
            <Label>Year: </Label>
            {this.props.project.period}
          </Row>
        </DescriptionContainer>
        <div className="image" />

        {/* tslint:disable-next-line:jsx-no-lambda */}
        <VewProject onClick={() => this.handleClick(this.props.project.id)}>
          <ArrowRight className="icon" />
          <span>Vew Details</span>
        </VewProject>
      </ProjectContainer>
    );
  }

  private readonly handleClick = (id: string): void => {
    this.props.toggleShowProjectDetails();
    this.props.getProjectDetails(id);
  };
}
