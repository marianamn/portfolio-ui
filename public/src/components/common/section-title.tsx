import styled from "styled-components";

export interface SectionTitleProps {
  readonly bottom: string;
  readonly left: string;
}

export const SectionTitle = styled<SectionTitleProps, "div">("div")`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  color: #ffffff;
  font-size: 3rem;
  text-transform: uppercase;

  @media only screen and (max-width: 1050px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 880px) {
    font-size: 2rem;
  }
`;
