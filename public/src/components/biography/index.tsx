import * as React from "react";
import styled from "styled-components";
import { GradientContainer } from "../common/gradient-container";
import { SectionTitle } from "../common/section-title";

export const BiographyContainer = styled("div")`
  height: 700px;
  display: flex;
  flex-wrap: wrap;
`;

export const Section1 = styled("div")`
  width: 70%;
  background: #e9eae2;
`;

export const Section2 = styled("div")`
  width: 100%;
  height: 300px;
  background: #e9eae2;
`;

interface Props {}

export default class BiographySection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <BiographyContainer>
        <GradientContainer
          width="30%"
          height="calc(400px - 60px)"
          padding="60px 0 0 0"
          backgroundColor="#ff9b6d"
        >
          <SectionTitle
            bottom="60px"
            left="35%"
          >
            Biography
          </SectionTitle>
        </GradientContainer>

        <Section1/>
        <Section2/>

      </BiographyContainer>
    );
  }
}
