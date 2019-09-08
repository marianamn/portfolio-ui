import { menuItems } from '@portfolio-constants/constants';
import * as React from 'react';
import styled from 'styled-components';

export interface MenuListProps {
  readonly isMobile: boolean;
}

export const MenuList = styled.div<MenuListProps>`
  color: white;
  list-style: none;
  padding: 0;
  border-top: ${({ isMobile }) => (isMobile ? "1px solid white" : "none")};
  margin: 5px 0;
`;

export const MenuItem = styled("li")`
  margin: 10px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: #e9eae2;
  }
`;

interface Props {
  readonly isMobile?: boolean;
  readonly scrollToElement: (id: string) => void;
  readonly toggleMenu: () => void;
}

export default class MenuListContainer extends React.Component<Props> {
  render(): JSX.Element {
    return <MenuList isMobile={this.props.isMobile}>{this.generateMenuContent()}</MenuList>;
  }

  private readonly generateMenuContent = () => {
    return menuItems.map((item: string) => {
      return (
        // tslint:disable-next-line:jsx-no-lambda
        <MenuItem
          key={item}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => {
            this.props.scrollToElement(`${item.toLowerCase()}`);
            this.props.toggleMenu();
          }}
        >
          {item}
        </MenuItem>
      );
    });
  };
}
