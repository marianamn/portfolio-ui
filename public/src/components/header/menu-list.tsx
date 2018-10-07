import * as React from "react";
import styled from "styled-components";
import { menuItems } from "../../constants";

export const MenuList = styled("ul")`
  color: white;
  list-style: none;
  padding: 0;
  border-top: 1px solid white;
`;

export const MenuItem = styled("li")`
  margin: 10px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {}

export default class MenuListContainer extends React.Component<Props> {
  render(): JSX.Element {
    return <MenuList>{this.generateMenuContent()}</MenuList>;
  }

  private readonly generateMenuContent = () => {
    return menuItems.map((item: string, index: number) => {
      console.log(item);
      return <MenuItem key={item}>{item}</MenuItem>;
    });
  };
}
