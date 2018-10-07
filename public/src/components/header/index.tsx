import * as React from "react";
import styled from "styled-components";
import LogoSection from "./logo-section";
import MenuSection from "./menu-section";

export const NavbarContainer = styled("div")`
  height: 450px;
  display: flex;

  @media only screen and (max-width: 1000px) {
    height: 400px;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

interface Props {
  readonly isMobile?: boolean;
}

export default class HeaderSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <NavbarContainer>
        <LogoSection isMobile={this.props.isMobile} />
        <MenuSection isMobile={this.props.isMobile} />
      </NavbarContainer>
    );
  }
}
