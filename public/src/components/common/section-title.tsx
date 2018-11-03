import styled, { css } from "styled-components";

export interface SectionTitleProps {
  readonly bottom: string;
  readonly left: string;
  readonly isMobile?: boolean;
}

export const SectionTitle = styled<SectionTitleProps, "div">("div")`
  position: absolute;
  bottom: ${({ bottom, isMobile }) => (isMobile ? `calc(${bottom} - 20px)` : bottom)};
  color: #ffffff;
  font-size: 3rem;
  text-transform: uppercase;
  ${({ isMobile }) =>
    !isMobile &&
    css`
      left: ${({ left }) => left};
    `};
  ${({ isMobile }) =>
    isMobile &&
    css`
      right: 10%;
    `};

  @media only screen and (max-width: 1050px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 880px) {
    font-size: 2rem;
  }
`;
