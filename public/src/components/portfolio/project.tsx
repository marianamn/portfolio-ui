import * as React from "react";
import styled, { css } from "styled-components";
import { ArrowRight } from "styled-icons/feather/ArrowRight";
import { ProjectContainerStyles, ProjectData } from "../../interfaces";
import { projectContainersCss } from "../../constants";

export interface ProjectProps {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly style: ProjectContainerStyles;
  readonly descriptionHeight: number;
}

export const ProjectContainer = styled<ProjectProps, "div">("div")`
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

  img {
    object-fit: contain;
    width: 100%;
    height: ${({ descriptionHeight, style, isMobile, isTablet }) =>
      isMobile
        ? `calc(400px - ${descriptionHeight}px - 40px) !important`
        : isTablet
          ? `calc(400px - ${descriptionHeight}px - 60px) !important`
          : `calc(${style.height} - ${descriptionHeight}px - 40px)`};
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
  height: 1.8em;
`;

export const Label = styled("span")`
  font-weight: bold;
`;

export const VewProject = styled("p")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  height: 20px;

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

interface StateProps {
  readonly descriptionHeight: number;
}

export default class Project extends React.Component<Props, StateProps> {
  constructor(props: Props, state: StateProps) {
    super(props);
    this.state = {
      descriptionHeight: 200,
    };
  }

  private descriptionRef: any;

  componentDidMount(): void {
    if (this.descriptionRef) {
      this.setState({ descriptionHeight: this.descriptionRef.clientHeight });
    }
  }

  render(): JSX.Element {
    const index = this.props.containerIndex - 1;
    const style = projectContainersCss[index];

    return (
      <ProjectContainer
        isMobile={this.props.isMobile}
        isTablet={this.props.isTablet}
        style={style}
        descriptionHeight={this.state.descriptionHeight}
      >
        {/* tslint:disable-next-line:jsx-no-lambda */}
        <DescriptionContainer innerRef={comp => (this.descriptionRef = comp)}>
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
        <img src={this.props.project.images[0]} />

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
