import styled from "styled-components";

export interface GradientContainerProps {
  readonly width: string;
  readonly height: string;
  readonly padding: string;
  readonly backgroundColor: string;
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const GradientContainer = styled<GradientContainerProps, "div">("div")`
  width: ${({ width, isMobile, isTablet }) => (isMobile ? "100%" : isTablet ? "50%" : width)};
  height: ${({ height, isMobile }) => (isMobile ? `calc(${height} / 1.5)` : height)};
  padding: ${({ padding, isMobile }) => (isMobile ? 0 : padding)};
  position: relative;
  background: ${({ backgroundColor }) =>
    `linear-gradient(to top left, ${backgroundColor} calc(0%), ${backgroundColor} calc(50% - 1px), #ffffff calc(10%), ${backgroundColor} calc(50% + 1px), ${backgroundColor} calc(100%)) no-repeat;`};
`;
