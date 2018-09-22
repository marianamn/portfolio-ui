import * as React from "react";
import styled from "styled-components";

export const Menu = styled("div")`
  width: 30%;
  background: linear-gradient(to top left, #7acec3 0%, #7acec3 calc(50% - 0.8px), #ffffff 10%, #7acec3 calc(50% + 0.8px), #7acec3 100%);
`;

interface Props {
}

export default class HeaderSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <Menu>
        <div />
        menu
      </Menu>
    );
  }
}
