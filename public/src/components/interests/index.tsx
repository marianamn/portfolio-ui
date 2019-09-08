import { SectionContainer } from '@portfolio-lib/section-container';
import { SectionTitle } from '@portfolio-lib/section-title';
import { Hobby, Interests } from '@portfolio-models/interests';
import * as React from 'react';
import styled from 'styled-components';

export interface BiographyProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const BiographyContainer = styled("div")`
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  background: #e5e9df;
  color: #333333;
  font-family: RobotoCondensed-Light;
`;

export const Heading = styled.div<BiographyProps>`
  float: ${({ isMobile }) => (isMobile ? "none" : "left")};
  width: ${({ isMobile, isTablet }) => (isMobile ? "100%" : isTablet ? "50%" : "30%")};
  margin-right: ${({ isMobile, isTablet }) => (isTablet ? "10px" : isMobile ? "0" : "25px")};
`;

export const InterestsContainer = styled.div<BiographyProps>`
  padding: 25px 10px 10px 0;
  width: ${({ isMobile, isTablet }) =>
    isMobile ? "100%" : isTablet ? "calc(50% - 45px)" : "calc(70% - 45px)"};

  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};

  .image {
    width: ${({ isMobile, isTablet }) => (isMobile ? "100%" : isTablet ? "32%" : "24%")};
    height: ${({ isMobile, isTablet }) => (isMobile ? "auto" : isTablet ? "100px" : "150px")};
  }

  .image-books {
    margin-top: ${({ isMobile, isTablet }) => (isMobile ? "10px" : isTablet ? "40px" : "150px")};
  }

  .image-puzzles {
    margin-top: ${({ isMobile, isTablet }) => (isMobile ? "10px" : isTablet ? "40px" : "75px")};
  }

  .image-origami {
    margin-top: ${({ isMobile, isTablet }) => (isMobile ? "10px" : isTablet ? "40px" : "0")};
  } */
`;

export const QuoteContainer = styled.div<BiographyProps>`
  display: flex;
  position: relative;

  .quote-container {
    padding: 0 5px;
  }

  .quote {
    color: #7acec3;
    font-size: 64px;
  }

  .author {
    text-align: right;
  }

  /* position: relative;
  width: ${({ isMobile, isTablet }) => (isMobile ? "90%" : isTablet ? "100%" : "100%")}; */

  /* align-self: ${({ isMobile }) => (isMobile ? "center" : "flex-end")};
  width: ${({ isMobile, isTablet }) => (isMobile ? "90%" : isTablet ? "100%" : "24%")};
  padding: 0 10px; */

  /* .quote {
    color: #7acec3;
    font-size: 64px;
    position: absolute;
  }

  .open-quote {
    top: 0;
    left: -20px;
  }

  .close-quote {
    position: absolute;
    bottom: -30px;
    right: -20px;
  }

  .author {
    text-align: right;
  } */
`;

interface Props {
  readonly interests: Interests;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
}

export default class InterestsSection extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <BiographyContainer>
        <Heading isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
          <SectionContainer
            width="100%"
            height="calc(400px - 60px)"
            padding="60px 0 0 0"
            backgroundColor="#b7ef88"
            isMobile={this.props.isMobile}
          >
            <SectionTitle bottom="60px" left="35%" isMobile={this.props.isMobile}>
              Interests
            </SectionTitle>
          </SectionContainer>
        </Heading>

        <InterestsContainer isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
          <QuoteContainer isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
            <span className="quote">“</span>
            <div className="quote-container">
              <p className="quote-text">{this.props.interests.quote.text} </p>
              <p className="author">{this.props.interests.quote.author}</p>
            </div>
            <span className="quote">”</span>
          </QuoteContainer>
          {/* {this.renderHobbies(this.props.interests.hobbies)} */}
        </InterestsContainer>
      </BiographyContainer>
    );
  }

  private readonly renderHobbies = (hobbies: ReadonlyArray<Hobby>) => {
    return hobbies.map((hobby: Hobby) => {
      return <img key={hobby.name} src={hobby.image} className={`image image-${hobby.name}`} />;
    });
  };
}
