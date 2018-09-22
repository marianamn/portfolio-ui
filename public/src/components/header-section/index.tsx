import * as React from "react";
import styled from "styled-components";
import LogoSection from "./logo-section";
import MenuSection from "./menu-section";

export const NavbarContainer = styled("div")`
  height: 500px;
  display: flex;
`;

interface Props {
}

export default class HeaderSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <NavbarContainer>
        <LogoSection />
        <MenuSection />
      </NavbarContainer>
    );
  }
}
