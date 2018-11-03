import * as React from "react";
import styled from "styled-components";
import { Menu } from "styled-icons/feather/Menu";
import { Close } from "styled-icons/material/Close";
import { name } from "../../constants";
import MenuListContainer from "./menu-list";
import SocialIcons from "../common/social-icons";

export const MenuContainer = styled("div")`
  background: #7acec3;
  padding: 5px 20px;
`;

export const MenuBarsContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface MenuBtnProps {
  readonly isOpened: boolean;
}

export const MenuBtn = styled<MenuBtnProps, "div">("div")`
  position: absolute;
  left: 0;
  width: 40px;
  border: ${({ isOpened }) => (isOpened ? "none" : "1.5px solid white")};
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: white;
    width: 35px;
    height: 35px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LogoContainer = styled("div")`
  text-align: center;
`;

export const Logo = styled("img")`
  width: 50px;
  height: 1.5em;
  margin-right: 10px;
`;

export const Name = styled("p")`
  font-family: RobotoCondensed-Light, sans-serif;
  font-size: 1.5em;
  color: #393d3c;
  text-transform: uppercase;
`;

export const Icons = styled("div")`
  margin-left: 10px;
`;

interface Props {
  readonly isToggled: boolean;
  readonly toggleMenu: () => void;
  readonly scrollToElement: (id: string) => void;
}

export default class MobileMenu extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <MenuContainer>
        <MenuBarsContainer>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <MenuBtn onClick={() => this.props.toggleMenu()} isOpened={this.props.isToggled}>
            {!this.props.isToggled ? <Menu className="icon" /> : <Close className="icon" />}
          </MenuBtn>
          <LogoContainer>
            <Logo src="assets/images/logo-white.png" />
            <Name>{name}</Name>
          </LogoContainer>
        </MenuBarsContainer>

        {this.props.isToggled && (
          <MenuListContainer
            isMobile
            scrollToElement={this.props.scrollToElement}
            toggleMenu={this.props.toggleMenu}
          />
        )}
        {this.props.isToggled && (
          <Icons>
            <SocialIcons iconColor="#ffffff" iconHoverColor="#70bab1" showEmail />
          </Icons>
        )}
      </MenuContainer>
    );
  }
}
