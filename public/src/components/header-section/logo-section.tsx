import * as React from "react";
import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn";
import { name, socialMediaLinks } from "../../constants";

export const LogoContainer = styled("div")`
  display: flex;
  width: calc(70% - 75px);
  background: #e9eae2;
  padding: 60px 40px;
`;

export const Logo = styled("img")`
  max-width: 70%;
  height: auto;
`;

export const PersonalInfoContainer = styled("div")`
  width: 30%;
`;

export const PersonalImageContainer = styled("div")`
  width: 70%;
  background: url("assets/images/antiques-bicycle-bike-247929.jpg") no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Name = styled("p")`
  font-family: RobotoCondensed-Regular, sans-serif;
  font-size: 22px;
  color: #393d3c;
  text-transform: uppercase;
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
`;

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

interface Props {}

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

        <PersonalImageContainer/>
      </LogoContainer>
    );
  }
}
