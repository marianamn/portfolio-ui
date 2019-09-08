import * as React from "react";
import styled from "styled-components";

export const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
`;

export const Tag = styled("span")`
  padding: 3px 15px;
  margin: 5px 5px 5px 0;
  color: #ffffff;
  background: #7acec3;
  border-radius: 15px;
`;

interface Props {
  readonly tags: ReadonlyArray<string>;
}

interface StateProps {}

export default class Tags extends React.Component<Props, StateProps> {
  render(): JSX.Element {
    return (
      <TagsContainer>
        {this.props.tags.length > 0 && this.renderTags(this.props.tags)}
      </TagsContainer>
    );
  }

  private readonly renderTags = (tags: ReadonlyArray<string>) => {
    return tags.map((tag: string) => {
      return <Tag key={tag}>{tag}</Tag>;
    });
  };
}
