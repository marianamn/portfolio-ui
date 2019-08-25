import * as React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'styled-icons/feather/ArrowRight';

import { ProjectData } from '../../interfaces';
import { SectionContainer } from '../common/section-container';
import { SectionTitle } from '../common/section-title';
import Project from './project';

export const PortfolioContainer = styled("div")`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export interface ListProps {
  readonly isMobile: boolean;
}

export const List = styled.ul<ListProps>`
  position: absolute;
  list-style: none;
  font-size: 13px;
  color: white;
  text-transform: uppercase;
  margin: 0;
  top: ${({ isMobile }) => (isMobile ? "15px" : "30px")};
  left: ${({ isMobile }) => (isMobile ? "0" : "10px")};

  .active {
    color: #000000;
  }
`;

export const ListItem = styled("li")`
  line-height: 1.6em;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #323232;

    span {
      color: #e9eae2;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-left: -25px;
    margin-right: 5px;
    color: #ffffff;
  }
`;

interface Props {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly projects: ReadonlyArray<ProjectData>;
  readonly toggleShowProjectDetails: () => void;
  readonly getProjectDetails: (id: string) => void;
}

interface StateProps {
  readonly selectedItem: number;
}

export default class PortfolioSection extends React.Component<Props, StateProps> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedItem: 0 };
  }

  render(): JSX.Element {
    return (
      <PortfolioContainer>
        <SectionContainer
          width="30%"
          height="calc(400px - 30px)"
          padding="30px 0 0 0"
          backgroundColor="#ebb240"
          isMobile={this.props.isMobile}
          isTablet={this.props.isTablet}
        >
          <List isMobile={this.props.isMobile}>{this.generateProjectsMenu()}</List>
          <SectionTitle bottom="60px" left="35%" isMobile={this.props.isMobile}>
            Projects
          </SectionTitle>
        </SectionContainer>

        {this.generateProjectsContent()}
      </PortfolioContainer>
    );
  }

  private readonly generateProjectsMenu = () => {
    const menu: any = ["All"];
    this.props.projects.forEach((p: ProjectData) => menu.push(p.name));

    return menu.map((item: string, index: number) => {
      return (
        <ListItem
          className={index === this.state.selectedItem ? "active" : ""}
          key={item}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.handleClick(this.props.projects[index - 1].id, index)}
        >
          {index === this.state.selectedItem && <ArrowRight className="icon" />}
          {item}
        </ListItem>
      );
    });
  };

  private readonly handleClick = (id: string, index: number): void => {
    this.selectProject(index);
    this.props.toggleShowProjectDetails();
    this.props.getProjectDetails(id);
  };

  private readonly selectProject = (index: number): any => {
    this.setState({ selectedItem: index });
  };

  private readonly generateProjectsContent = () => {
    return this.props.projects.map((project: ProjectData, index: number) => {
      return (
        <Project
          key={project.id}
          containerIndex={index + 1}
          project={project}
          isMobile={this.props.isMobile}
          isTablet={this.props.isTablet}
          toggleShowProjectDetails={this.props.toggleShowProjectDetails}
          getProjectDetails={this.props.getProjectDetails}
        />
      );
    });
  };
}
