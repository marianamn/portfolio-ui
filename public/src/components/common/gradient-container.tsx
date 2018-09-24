import styled from "styled-components";

export interface GradientContainerProps {
  readonly width: string;
  readonly height: string;
  readonly padding: string;
  readonly backgroundColor: string;
}

export const GradientContainer = styled<GradientContainerProps, "div">("div")`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  position: relative;
  background: ${({ backgroundColor }) => `linear-gradient(to top left, ${backgroundColor} calc(0%), ${backgroundColor} calc(50% - 1px), #ffffff calc(10%), ${backgroundColor} calc(50% + 1px), ${backgroundColor} calc(100%)) no-repeat;`};
`;
