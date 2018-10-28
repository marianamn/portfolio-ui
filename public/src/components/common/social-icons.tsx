import * as React from "react";
import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn";
import { Mail } from "styled-icons/feather/Mail";
import { socialMediaLinks, email } from "../../constants";

export const SocialIconsContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export interface SocialIconsProps {
  readonly iconColor?: string;
  readonly iconHoverColor?: string;
}

export const Link = styled<SocialIconsProps, "a">("a")`
  color: ${({ iconColor }) => `${iconColor}`};

  &:hover {
    cursor: pointer;
    color: ${({ iconHoverColor }) => `${iconHoverColor}`};
  }
`;

export const Icon = styled<SocialIconsProps, "span">("span")`
  margin-right: 10px;

  .icon {
    width: 25px;
    height: 25px;
    color: ${({ iconColor }) => `${iconColor}`};
  }

  &:first-of-type {
    height: 25px;
    margin-left: -5px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${({ iconHoverColor }) => `${iconHoverColor}`};
  }
`;

interface Props {
  readonly iconColor?: string;
  readonly iconHoverColor?: string;
  readonly showEmail?: boolean;
}

export default class SocialIcons extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <SocialIconsContainer>
        <Icon>
          <Link
            href={socialMediaLinks.facebook}
            target="blank"
            iconColor={this.props.iconColor}
            iconHoverColor={this.props.iconHoverColor}
          >
            <FacebookF className="icon" />
          </Link>
        </Icon>
        <Icon>
          <Link
            href={socialMediaLinks.twitter}
            target="blank"
            iconColor={this.props.iconColor}
            iconHoverColor={this.props.iconHoverColor}
          >
            <Twitter className="icon" />
          </Link>
        </Icon>
        <Icon>
          <Link
            href={socialMediaLinks.linkedIn}
            target="blank"
            iconColor={this.props.iconColor}
            iconHoverColor={this.props.iconHoverColor}
          >
            <LinkedinIn className="icon" />
          </Link>
        </Icon>
        <Icon iconColor={this.props.iconColor} iconHoverColor={this.props.iconHoverColor}>
          <Mail className="icon email">
            <span>{email}</span>
          </Mail>
        </Icon>
      </SocialIconsContainer>
    );
  }
}
