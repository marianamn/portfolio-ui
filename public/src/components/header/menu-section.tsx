import { SectionContainer } from '@portfolio-lib/section-container';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { Menu } from 'styled-icons/feather/Menu';
import { Close } from 'styled-icons/material/Close';

import MenuListContainer from './menu-list';
import MobileMenu from './menu-mobile';

export interface MenuProps {
  readonly isOpened?: boolean;
}

export const MenuContainer = styled.div<MenuProps>`
  position: absolute;
  right: ${({ isOpened }) => !isOpened && "39%"};
  min-width: 60px;
  max-width: 130px;
  width: calc(62% - 60px);
  height: calc(50% - 120px);
  right: 39%;
  ${({ isOpened }) =>
    isOpened &&
    css`
      height: calc(50% - 60px);
    `};

  .icon {
    color: white;
    width: 40px;
    height: 40px;
  }

  &:hover {
    .icon {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    height: calc(50% - 90px);
    right: 45%;
    ${({ isOpened }) =>
      isOpened &&
      css`
        height: 50%;
        left: 0;
        margin-top: -50px;
      `};
  }
`;

export const MenuBarsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  readonly isMobile?: boolean;
  readonly isToggled: boolean;
  readonly toggleMenu: () => void;
  readonly scrollToElement: (id: string) => void;
}

export default class MenuSection extends React.Component<Props> {
  render(): JSX.Element {
    if (this.props.isMobile) {
      return (
        <MobileMenu
          toggleMenu={this.props.toggleMenu}
          isToggled={this.props.isToggled}
          scrollToElement={this.props.scrollToElement}
        />
      );
    } else {
      return (
        <SectionContainer
          width="30%"
          height="calc(100% - 60px)"
          padding="60px 0 0 0"
          backgroundColor="#7acec3"
        >
          <MenuContainer isOpened={this.props.isToggled}>
            {!this.props.isToggled && (
              // tslint:disable-next-line:jsx-no-lambda
              <MenuBarsContainer onClick={() => this.props.toggleMenu()}>
                <Menu className="icon" />
              </MenuBarsContainer>
            )}
            {this.props.isToggled && (
              <div>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Close className="icon" onClick={() => this.props.toggleMenu()} />
                <MenuListContainer
                  isMobile={this.props.isMobile}
                  scrollToElement={this.props.scrollToElement}
                  toggleMenu={this.props.toggleMenu}
                />
              </div>
            )}
          </MenuContainer>
        </SectionContainer>
      );
    }
  }
}
