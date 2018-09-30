import * as React from "react";
import styled, { css } from "styled-components";
import { ArrowRight } from "styled-icons/feather/ArrowRight";
import { ProjectData } from "../../interfaces";

export interface ProjectProps {
  readonly containerIndex: number;
  readonly project?: ProjectData;
}

export const ProjectContainer = styled<ProjectProps, "div">("div")`
  ${({ containerIndex }) => containerIndex === 1 &&
    css`
      width: 40%;
    `};
  ${({ containerIndex }) => containerIndex === 2 &&
    css`
      width: 30%;
      height: 300px;
      background: #dfe0d9;
    `};
  ${({ containerIndex }) => containerIndex === 3 &&
    css`
      width: 20%;
      height: 400px;
      background: #697b86;
    `};
  ${({ containerIndex }) => containerIndex === 4 &&
    css`
      width: 50%;
      height: 400px;
      background: #eaeaea;
    `};
  ${({ containerIndex }) => containerIndex === 5 &&
    css`
      width: 30%;
      height: 500px;
      margin-top: -100px;
      background: #f7f7f3;
    `};
`;

interface Props {
  readonly containerIndex: number;
  readonly project: ProjectData;
}

interface StateProps {
}

export default class Project extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    console.log(this.props.project)
    return (
      <ProjectContainer containerIndex={this.props.containerIndex}>
        <p>{this.props.project.name}</p>
      </ProjectContainer>
    )
  }
}
