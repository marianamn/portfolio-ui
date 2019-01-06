import * as React from "react";
import styled from "styled-components";
import { name, personalImage } from "../../constants";
import ContactIcons from "../common/contact-icons";

interface ImageContainerProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const ImageContainer = styled<ImageContainerProps, "div">("div")`
  position: relative;
  background: #e9eae2;
  width: ${({ isMobile }) => isMobile ? "100%" : "70%"};
  height: ${({ isMobile }) => isMobile && "250px"};
`;

export const PersonalImageContainer = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PersonalDetailsContainer = styled<ImageContainerProps, "div">("div")`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  max-width: ${({ isMobile }) => isMobile ? "35%" : "40%"};
  background: #151717;
  opacity: 0.5;
  padding: 20px;
`;

export const Details = styled<ImageContainerProps, "p">("p")`
  font-family: RobotoCondensed-Regular, sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  line-height: initial;

  .addressing {
    font-size: 1.25em;
    margin: ${({ isMobile }) => isMobile ? "0 0 20px 0" : "20px 0"};
  }

  .name {
    font-size: 2em;
    text-transform: uppercase;
  }

  .details {
    font-family: RobotoCondensed-Italic, sans-serif;
    margin: ${({ isMobile }) => isMobile ? "0" : "40px 0"};
  }
`;

export const ContactIconsContainer = styled("div")`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

interface Props {
  readonly isImageLoaded: (loaded: boolean) => void;
  readonly isMobile?: boolean;
}

export default class ImageSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <ImageContainer isMobile={this.props.isMobile}>
        <PersonalImageContainer
          src={personalImage}
          onLoad={this.loadImage}
          onError={this.loadImage}
        />

        <PersonalDetailsContainer isMobile={this.props.isMobile}>
          <Details isMobile={this.props.isMobile}>
            <span className="addressing">
              {this.props.isMobile ? "Hi there!" : "Hi there, my name is"}
            </span>
            {!this.props.isMobile &&
              <span className="name">{name}</span>
            }
            <span className="details">Welcome to my personal portfolio page. Here you can see my professional passions, some of my projects that I'm most proud of and also to have a little sneak into my new hobbies and interests.</span>
          </Details>
        </PersonalDetailsContainer>

        {!this.props.isMobile &&
          <ContactIconsContainer>
            <ContactIcons
              iconColor="#7acec3"
              iconHoverColor="#70bab1"
            />
          </ContactIconsContainer>
        }
      </ImageContainer>
    );
  }

  private readonly loadImage = () => {
    this.props.isImageLoaded(false);
  };
}
