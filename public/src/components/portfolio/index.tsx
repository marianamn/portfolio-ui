import * as React from "react";
import styled from "styled-components";
import { ArrowRight } from "styled-icons/feather/ArrowRight";
import { projects } from "../../constants";
import { ProjectData } from "../../interfaces";
import { GradientContainer } from "../common/gradient-container";
import { SectionTitle } from "../common/section-title";
import Project from "./project";

export const PortfolioContainer = styled("div")`
  height: 800px;
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled("ul")`
  position: absolute;
  right: 45%;
  list-style: none;
  font-size: 13px;
  color: white;
  text-transform: uppercase;

  .active {
    color: #000000;
  }
`;

export const ListItem = styled("li")`
  height: 1.5em;
  padding: 0 20px 0 0;
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

export interface ProjectProps {
  readonly index: number;
}

interface Props {}

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
        <GradientContainer
          width="30%"
          height="calc(400px - 60px)"
          padding="60px 0 0 0"
          backgroundColor="#ebb240"
        >
          <List>{this.generateProjectsMenu()}</List>
          <SectionTitle bottom="60px" left="35%">
            Projects
          </SectionTitle>
        </GradientContainer>

        {this.generateProjectsContent()}
      </PortfolioContainer>
    );
  }

  private readonly generateProjectsMenu = () => {
    const menu: ReadonlyArray<string> = [
      "All",
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
      "Project 5",
    ];

    return menu.map((item: string, index: number) => {
      return (
        <ListItem
          className={index === this.state.selectedItem ? "active" : ""}
          key={item}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.selectProject(index)}
        >
          {index === this.state.selectedItem && <ArrowRight className="icon" />}
          {item}
        </ListItem>
      );
    });
  };

  private readonly selectProject = (index: number): any => {
    this.setState({ selectedItem: index });
  };

  private readonly generateProjectsContent = () => {
    return projects.map((project: ProjectData, index: number) => {
      return <Project key={project.id} containerIndex={index + 1} project={project} />;
    });
  };
}
