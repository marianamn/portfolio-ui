import styled from 'styled-components';

export interface SectionTitleProps {
  readonly bottom: string;
  readonly left: string;
  readonly isMobile?: boolean;
}

export const SectionTitle = styled.div<SectionTitleProps>`
  position: absolute;
  bottom: ${({ bottom, isMobile }) => (isMobile ? `calc(${bottom} - 20px)` : bottom)};
  color: #ffffff;
  font-size: 3rem;
  text-transform: uppercase;
  left: ${({ isMobile, left }) => (!isMobile && left)};
  right: ${({ isMobile }) => (isMobile && '10%')};

  @media only screen and (max-width: 1180px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;
