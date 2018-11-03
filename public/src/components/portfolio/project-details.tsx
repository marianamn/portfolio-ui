import * as React from "react";
import styled, { css } from "styled-components";
import { ProjectContainerStyles, ProjectData } from "../../interfaces";
import { projectContainersCss } from "../../constants";

interface Props {
  readonly projectDetails: ProjectData;
  readonly toggleShowProjectDetails: () => void;
}

interface StateProps {}

export default class ProjectDetails extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    return (
      <div>
        ProjectDetails
        {this.props.projectDetails.name}
        {/* tslint:disable-next-line:jsx-no-lambda */}
        <button onClick={() => this.props.toggleShowProjectDetails()}>Close</button>
      </div>
    );
  }
}
