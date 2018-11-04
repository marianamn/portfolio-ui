import * as React from "react";
import styled from "styled-components";
import { ChevronLeft } from "styled-icons/feather/ChevronLeft";
import { ChevronRight } from "styled-icons/feather/ChevronRight";
import { Close } from "styled-icons/material/Close";

export const CarouselContainer = styled("div")`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 40px;
    height: 40px;
  }

  .active-icon {
    color: #131313;
  }

  .active-icon:hover {
    cursor: pointer;
  }

  .inactive-icon {
    color: #929090;
  }
`;

export const FullScreen = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 1;
`;

export const FullScreenImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 5%;
  z-index: 2;
  width: 90%;
  height: 100%;

  .close {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 5%;
    height: 40px;
    color: #ffffff;
  }

  .close:hover {
    cursor: pointer;
  }
`;

export interface FullScreenImageContainerProps {
  readonly imagePath: string;
}

export const FullScreenImage = styled<FullScreenImageContainerProps, "div">("div")`
  background: ${({ imagePath }) => `url(${imagePath}) no-repeat`};
  background-position: center;
  background-size: contain;
  width: 90vw;
  height: 100vh;
`;

export interface ImageProps {
  readonly imagePath: string;
}

export const Image = styled<ImageProps, "div">("div")`
  margin-right: 10px;
  background: ${({ imagePath }) => `url(${imagePath}) no-repeat`};
  background-position: center;
  background-size: contain;
  width: 30%;
  height: 100px;
`;

interface Props {
  readonly images: ReadonlyArray<string>;
}

interface StateProps {
  readonly startIndex: number;
  readonly endIndex: number;
  readonly isLeftArrowActive: boolean;
  readonly isRightArrowActive: boolean;
  readonly showFullScreenImageContainer: boolean;
  readonly activeImagePath: string;
}

export default class ImageCarousel extends React.Component<Props, StateProps> {
  constructor(props: Props, state: StateProps) {
    super(props);
    this.state = {
      startIndex: 1,
      endIndex: 4,
      isLeftArrowActive: false,
      isRightArrowActive: this.props.images.length !== 4,
      showFullScreenImageContainer: false,
      activeImagePath: "",
    };
  }

  render(): JSX.Element {
    return (
      <CarouselContainer>
        <ChevronLeft
          className={`icon ${this.state.isLeftArrowActive ? "active-icon" : "inactive-icon"}`}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.showPrevious()}
        />
        {this.renderTags(this.props.images)}
        <ChevronRight
          className={`icon ${this.state.isRightArrowActive ? "active-icon" : "inactive-icon"}`}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.showNext()}
        />

        {this.state.showFullScreenImageContainer && <FullScreen />}
        {this.state.showFullScreenImageContainer && (
          <FullScreenImageContainer>
            <FullScreenImage imagePath={this.state.activeImagePath} />
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <Close className="close" onClick={() => this.exitFullScreenImage()} />
          </FullScreenImageContainer>
        )}
      </CarouselContainer>
    );
  }

  private readonly renderTags = (images: ReadonlyArray<string>) => {
    const firstItems = images.slice(this.state.startIndex, this.state.endIndex);

    return firstItems.map((image: string) => {
      return (
        <Image
          key={image}
          imagePath={image}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.showFullScreenImage(image)}
        />
      );
    });
  };

  private readonly showPrevious = () => {
    if (this.state.startIndex !== 1) {
      this.setState({
        startIndex: this.state.startIndex - 1,
        endIndex: this.state.endIndex - 1,
        isLeftArrowActive: true,
        isRightArrowActive: this.state.endIndex !== this.props.images.length,
      });
    } else {
      this.setState({
        isLeftArrowActive: false,
        isRightArrowActive: this.state.endIndex !== this.props.images.length,
      });
    }
  };

  private readonly showNext = () => {
    if (this.state.endIndex !== this.props.images.length) {
      this.setState({
        startIndex: this.state.startIndex + 1,
        endIndex: this.state.endIndex + 1,
        isLeftArrowActive: true,
        isRightArrowActive: true,
      });
    } else {
      this.setState({
        isLeftArrowActive: this.state.startIndex > 1,
        isRightArrowActive: false,
      });
    }
  };

  private readonly showFullScreenImage = (imagePath: string) => {
    this.setState({
      showFullScreenImageContainer: true,
      activeImagePath: imagePath,
    });
  };

  private readonly exitFullScreenImage = () => {
    this.setState({ showFullScreenImageContainer: false });
  };
}
