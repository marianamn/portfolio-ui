import * as React from "react";
import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn";
import { name, socialMediaLinks } from "../../constants";

export const FooterContainer = styled("div")`
  padding: 20px;
  text-align: center;
  background: #e9eae2;
`;

export const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Logo = styled("img")`
  width: 50px;
  height: 30px;
  margin-right: 10px;
`;

export const Copyrights = styled("p")`
  font-size: 12px;
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

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Name = styled("span")`
  color: #333333;
  margin-right: 5px;
  text-transform: uppercase;
`;


interface Props {}

export default class Footer extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <FooterContainer>
        <LogoContainer>
          <Logo src="assets/images/logo.png" />
          <Name>{name}</Name>
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
        </LogoContainer>

        <Copyrights>2018 All rights reserved.</Copyrights>
      </FooterContainer>
    );
  }
}
