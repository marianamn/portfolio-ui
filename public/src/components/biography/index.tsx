import * as React from "react";
import styled from "styled-components";
import { GradientContainer } from "../common/gradient-container";
import { SectionTitle } from "../common/section-title";
import { Biography } from "../../interfaces";
import { Heart } from "styled-icons/fa-solid/Heart";
import { ExternalLinkAlt } from "styled-icons/fa-solid/ExternalLinkAlt";
import { Award } from "styled-icons/fa-solid/Award";

export interface BiographyProps {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export const BiographyContainer = styled("div")`
  color: #333333;
  font-family: RobotoCondensed-Light;
  background: #e9eae2;
  min-height: 400px;
`;

export const Heading = styled<BiographyProps, "div">("div")`
  float: ${({ isMobile }) => (isMobile ? "none" : "left")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "30%")};
  margin-right: ${({ isTablet }) => (isTablet ? "10px" : "25px")};
`;

export const ProfessionalSection = styled<BiographyProps, "div">("div")`
  padding: ${({ isTablet, isMobile }) => isTablet ? "5px 10px 0 10px" : (isMobile ? "10px" : "25px 10px 0 10px")};

  .icon {
    width: 1.2em;
    height: 1.2em;
    color: #7acec3;
    margin-right: 5px;
  }

  a {
    color: #333333;
    text-decoration: none;
  }
`;

export const ContentTitle = styled("p")`
  font-family: RobotoCondensed-Italic;
`;

export const ContentText = styled("p")`
  margin-top: 10px;
`;

export const Interest = styled("span")`
  margin-right: 10px;
`;

export const Label = styled("div")`
  margin-top: 10px;
  padding: 5px 0;
  font-size: 14px;
  text-transform: uppercase;
  font-family: RobotoCondensed-Bold;
`;

export const Content = styled("span")`
  margin-left: 1.2em;
`;

export const List = styled("ul")`
  margin: 0 0 5px 1.2em;
  padding: 0;
`;

export const ListItem = styled("li")`
  margin: 5px 0;
  list-style: none;
  padding: 0;
`;

export const CvLink = styled("div")`
  text-align: right;
  padding: 0 10px 10px 0;
`;

export const WhoAmISection = styled<BiographyProps, "div">("div")`
  display: flex;
  align-items: center;
  flex-direction: ${({ isMobile }) => isMobile ? "column" : "row"};

  img {
    width: ${({ isMobile }) => isMobile ? "100%" : "250px"};
    height: ${({ isMobile }) => isMobile ? "auto" : "200px"};
    margin-left: ${({ isMobile }) => isMobile ? "0" : "10px"};
    margin-top: ${({ isMobile }) => isMobile && "10px"};
  }
`;

interface Props {
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly biography: Biography;
}

export default class BiographySection extends React.Component<Props> {
  render(): JSX.Element {
    console.log(this.props.isTablet)
    return (
      <BiographyContainer>
        <Heading isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
          <GradientContainer
            width="100%"
            height="calc(400px - 60px)"
            padding="60px 0 0 0"
            backgroundColor="#ff9b6d"
            isMobile={this.props.isMobile}
          >
            <SectionTitle bottom="60px" left="35%" isMobile={this.props.isMobile}>
              Biography
            </SectionTitle>
          </GradientContainer>
        </Heading>

        <ProfessionalSection isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
          <WhoAmISection isMobile={this.props.isMobile}>
            <ContentTitle>{this.props.biography.whoAmI}</ContentTitle>
            <img src={this.props.biography.image} />
          </WhoAmISection>

          <ContentText>{this.props.biography.whatAreMyProfessionalPassions}</ContentText>

          <Label>
            <Heart className="icon" />
            Most passionate about
          </Label>
          <Content>
            {this.renderProfessionalInterests(this.props.biography.professionalInterests)}
          </Content>

          <Label>
            <Award className="icon" />
            Most proud of
          </Label>
          <List>{this.renderAchievements(this.props.biography.achievements)}</List>

          <CvLink>
            <a href="assets/resume/MarianaNaidenovaResume.pdf" target="_blank">
              <ExternalLinkAlt className="icon" />
              <span>Open CV</span>
            </a>
          </CvLink>
        </ProfessionalSection>
      </BiographyContainer>
    );
  }

  private readonly renderProfessionalInterests = (interests: ReadonlyArray<string>) => {
    return interests.map(interest => <Interest key={interest}>{interest}</Interest>);
  };

  private readonly renderAchievements = (achievements: ReadonlyArray<string>) => {
    return achievements.map(achievement => <ListItem key={achievement}>{achievement}</ListItem>);
  };
}
