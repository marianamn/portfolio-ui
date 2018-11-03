import * as React from "react";
import styled from "styled-components";
import { GradientContainer } from "../common/gradient-container";
import { SectionTitle } from "../common/section-title";

export const BiographyContainer = styled("div")`
  height: 400px;
  display: flex;
  flex-wrap: wrap;
`;

export const Section1 = styled("div")`
  width: 70%;
  background: #e5e9df;
`;

interface Props {
  readonly isMobile: boolean;
}

export default class InterestsSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <BiographyContainer>
        <GradientContainer
          width="30%"
          height="calc(100% - 60px)"
          padding="60px 0 0 0"
          backgroundColor="#b7ef88"
          isMobile={this.props.isMobile}
        >
          <SectionTitle bottom="60px" left="35%" isMobile={this.props.isMobile}>
            Interests
          </SectionTitle>
        </GradientContainer>

        <Section1 />
      </BiographyContainer>
    );
  }
}
