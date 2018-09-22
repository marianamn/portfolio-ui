import * as React from "react";
import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn";
import { name, socialMediaLinks } from "../../constants";

export const LogoContainer = styled("div")`
  display: flex;
  width: 70%;
  background: #e9eae2;
  padding: 60px;
`;

export const Logo = styled("img")`
  max-width: 80%;
  height: auto;
`;

export const PersonalInfoContainer = styled("div")`
  flex: 1;
`;

export const PersonalImageContainer = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
`;

export const Name = styled("p")`
  font-family: RobotoCondensed-Regular, sans-serif;
  font-size: 24px;
  color: #393d3c;
`;

export const SocialIconsContainer = styled("p")`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

export const Link = styled("a")`
  color: #7acec3;

  &:hover {
    cursor: pointer;
    color: #70bab1;
  }
`

export const Icon = styled("span")`
  margin-right: 10px;

  .icon {
    width: 25px;
    height: 25px;
  }

  &:first-of-type {
    height: 25px;
    margin-left: -5px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled("img")`
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border: 6px solid white;
`;

interface Props {
}

export default class LogoSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LogoContainer>
        <PersonalInfoContainer>
          <Logo src="assets/images/logo.png" />
          <Name>{name}</Name>
          <SocialIconsContainer>
            <Icon>
              <Link href={socialMediaLinks.facebook} target="blank">
                <FacebookF className="icon" />
              </Link>
            </Icon>
            <Icon>
              <Link href={socialMediaLinks.twitter} target="blank">
                <Twitter className="icon" />
              </Link>
            </Icon>
            <Icon>
              <Link href={socialMediaLinks.linkedIn} target="blank">
                <LinkedinIn className="icon" />
              </Link>
            </Icon>
          </SocialIconsContainer>
        </PersonalInfoContainer>

        <PersonalImageContainer>
          <Picture src="assets/images/art-asian-bulb-236397.jpg" />
        </PersonalImageContainer>
      </LogoContainer>
    );
  }
}
