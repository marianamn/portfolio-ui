import * as React from "react";
import styled from "styled-components";
import ImageSection from "./image-section";
import MenuSection from "./menu-section";

interface NavbarContainerProps {
  readonly isMobile?: boolean;
}

export const NavbarContainer = styled<NavbarContainerProps, "div">("div")`
  height: ${({ isMobile }) => isMobile ? "auto" : "500px"};
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile && "column-reverse"};
`;

interface Props {
  readonly isMobile?: boolean;
  readonly scrollToElement: (id: string, isMobile?: boolean) => void;
  readonly isImageLoaded: (loaded: boolean) => void;
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
      <NavbarContainer isMobile={this.props.isMobile}>
        <ImageSection
          isMobile={this.props.isMobile}
          isImageLoaded={this.props.isImageLoaded}
        />
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
