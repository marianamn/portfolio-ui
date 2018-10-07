import * as React from "react";
import styled from "styled-components";
import { Menu } from "styled-icons/feather/Menu";
import { Close } from "styled-icons/material/Close";
import { name } from "../../constants";
import MenuListContainer from "./menu-list";
import SocialIcons from "../common/social-icons";

export const MenuContainer = styled("div")`
  background: #7acec3;
  padding: 20px;
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

export const Logo = styled("img")`
  width: 50px;
  height: 1.75em;
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

interface Props {}
interface State {
  readonly toggleMenu: boolean;
}

export default class MobileMenu extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = { toggleMenu: false };
  }

  render(): JSX.Element {
    return (
      <MenuContainer>
        <MenuBarsContainer>
          <MenuBtn onClick={this.toggleMenu} isOpened={this.state.toggleMenu}>
            {!this.state.toggleMenu ? <Menu className="icon" /> : <Close className="icon" />}
          </MenuBtn>
          {/* <Logo src="assets/images/logo-white.png" /> */}
          <Name>{name}</Name>
        </MenuBarsContainer>

        {this.state.toggleMenu && <MenuListContainer />}
        {this.state.toggleMenu && (
          <Icons>
            <SocialIcons iconColor="#ffffff" iconHoverColor="#70bab1" showEmail={true}/>
          </Icons>
        )}
      </MenuContainer>
    );
  }

  private readonly toggleMenu = (): void => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };
}
