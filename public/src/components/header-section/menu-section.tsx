import * as React from "react";
import styled from "styled-components";
import { email } from "../../constants";
import { Menu } from "styled-icons/feather/Menu";
import { Mail } from "styled-icons/feather/Mail";
import { GradientContainer } from "../common/gradient-container";

export const MenuBarsContainer = styled("div")`
  position: absolute;
  right: 39%;
  width: calc(62% - 60px);
  max-width: 130px;
  height: calc(50% - 120px);
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: white;
    width: 40px;
    height: 40px;
  }
`;

export const ContactsContainer = styled("div")`
  position: absolute;
  left: 25%;
  bottom: 60px;
  right: 10px;

  &:hover {
    cursor: pointer;

    span,
    .icon {
      color: #e9eae2;
    }
  }

  span {
    word-wrap: break-word;
    word-break: break-all;
    font-size: 13px;
    color: white;
  }

  .icon {
    color: white;
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;


interface Props {}

export default class HeaderSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <GradientContainer
        width="30%"
        height="calc(100% - 60px)"
        padding="60px 0 0 0"
        backgroundColor="#7acec3"
      >
        <MenuBarsContainer>
          <Menu className="icon" />
        </MenuBarsContainer>

        <ContactsContainer onClick={this.sendEmail}>
          <Mail className="icon"/>
          <span>{email}</span>
        </ContactsContainer>

      </GradientContainer>
    );
  }

  private readonly sendEmail = (): any => {
    window.location.href = `mailto:${email}`;
  }
}


