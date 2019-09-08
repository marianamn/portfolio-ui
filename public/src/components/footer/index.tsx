import { name } from '@portfolio-constants/constants';
import ContactIcons from '@portfolio-lib/contact-icons';
import * as React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled("div")`
  padding: 20px;
  text-align: center;
  background: #e9eae2;
`;

export const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Copyrights = styled("p")`
  font-size: 12px;
`;

export const Name = styled("span")`
  color: #333333;
  margin-right: 15px;
  text-transform: uppercase;
`;

interface Props {}

export default class Footer extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <FooterContainer>
        <LogoContainer>
          <Name>{name}</Name>
          <ContactIcons iconColor="#7acec3" iconHoverColor="#70bab1" />
        </LogoContainer>

        <Copyrights>{this.getCurrentYear()} All rights reserved.</Copyrights>
      </FooterContainer>
    );
  }

  private readonly getCurrentYear = () => {
    return new Date().getUTCFullYear();
  };
}
