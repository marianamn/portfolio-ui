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
  readonly scrollToElement: (id: string) => void;
}

interface State {
  readonly isToggled: boolean;
}

export default class HeaderSection extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = { isToggled: false };
  }

  render(): JSX.Element {
    return (
      <NavbarContainer>
        <LogoSection isMobile={this.props.isMobile} />
        <MenuSection
          isMobile={this.props.isMobile}
          toggleMenu={this.toggleMenu}
          isToggled={this.state.isToggled}
          scrollToElement={this.props.scrollToElement}
        />
      </NavbarContainer>
    );
  }

  private readonly toggleMenu = (): void => {
    this.setState({ isToggled: !this.state.isToggled });
  };
}
