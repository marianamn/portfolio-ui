import * as React from "react";
import styled from "styled-components";
import { name } from "../../constants";
import SocialIcons from "../common/social-icons";

export const LogoContainer = styled("div")`
  display: flex;
  width: calc(70% - 75px);
  background: #e9eae2;
  padding: 60px 40px;

  @media only screen and (max-width: 768px) {
    width: calc(70% - 20px);
    padding: 30px 10px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    width: calc(100% - 40px);
    padding: 10px 20px;
  }
`;

export const Logo = styled("img")`
  max-width: 70%;
  height: auto;
`;

export const PersonalInfoContainer = styled("div")`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const PersonalImageContainer = styled("img")`
  /* 10px borders */
  width: calc(70% - 10px);
  height: auto;
  object-fit: cover;
  border: 5px solid white;

  @media only screen and (max-width: 480px) {
    width: auto;
    height: 200px;
  }
`;

export const Name = styled("p")`
  font-family: RobotoCondensed-Regular, sans-serif;
  font-size: 1.375em;
  color: #393d3c;
  text-transform: uppercase;
`;

export const SocialIconsContainer = styled("p")`
  display: flex;
  align-items: center;
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

interface Props {
  readonly isMobile?: boolean;
}

export default class LogoSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LogoContainer>
        {!this.props.isMobile && (
          <PersonalInfoContainer>
            <div>
              <Logo src="assets/images/logo.png" />
              <Name>{name}</Name>
            </div>

            <SocialIcons iconColor="#7acec3" iconHoverColor="#70bab1" />
          </PersonalInfoContainer>
        )}

        <PersonalImageContainer src="assets/images/antiques-bicycle-bike-247929.jpg" />
      </LogoContainer>
    );
  }
}
