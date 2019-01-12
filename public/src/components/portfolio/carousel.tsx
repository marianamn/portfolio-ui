import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { ChevronLeft } from "styled-icons/feather/ChevronLeft";
import { ChevronRight } from "styled-icons/feather/ChevronRight";
import { Close } from "styled-icons/material/Close";

export const CarouselContainer = styled("div")`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

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

  .active-icon-full {
    color: #ffffff;
  }

  .active-icon-full:hover {
    cursor: pointer;
  }

  .inactive-icon-full {
    color: #333333;
  }

  .icon-full-left {
    position: absolute;
    top: calc(50% - 20px);
    left: -40px;
  }

  .icon-full-right {
    position: absolute;
    top: calc(50% - 20px);
    right: -40px;
  }
`;

export const FullScreen = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 1;
`;

export const FullScreenImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: calc(100vw - 80px);
  height: 100%;

  .close {
    position: fixed;
    top: 10px;
    right: 0;
    width: 40px;
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
  width: 100%;
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
  width: 180px;
  height: 100px;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  readonly images: ReadonlyArray<string>;
}

interface StateProps {
  readonly startIndex: number;
  readonly endIndex: number;
  readonly isLeftArrowActive: boolean;
  readonly isRightArrowActive: boolean;
  readonly indexFullScreen: number;
  readonly isLeftArrowActiveFullScreen: boolean;
  readonly isRightArrowActiveFullScreen: boolean;
  readonly showFullScreenImageContainer: boolean;
  readonly activeImagePath: string;
  readonly containerWidth: number;
}

export default class ImageCarousel extends React.Component<Props, StateProps> {
  constructor(props: Props, state: StateProps) {
    super(props);
    this.state = {
      startIndex: 1,
      endIndex: 1,
      isLeftArrowActive: false,
      isRightArrowActive: false,
      indexFullScreen: 1,
      isLeftArrowActiveFullScreen: false,
      isRightArrowActiveFullScreen: false,
      showFullScreenImageContainer: false,
      activeImagePath: "",
      containerWidth: 0,
    };
  }

  private carouselContainerRef: any;

  componentDidMount(): void {
    const carouselContainerNode: any = ReactDOM.findDOMNode(this.carouselContainerRef);
    const containerWidth = carouselContainerNode.childNodes[0].getBoundingClientRect().width;
    const widthWithoutArrows = containerWidth - 40;
    const carouselItems = Math.floor(widthWithoutArrows / 190);
    if (carouselContainerNode) {
      this.setState({
        containerWidth,
        endIndex: this.state.startIndex + carouselItems,
        isRightArrowActive: this.props.images.length - 1 > carouselItems,
      });
    }
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render(): JSX.Element {
    console.log(this.state)
    return (
      // tslint:disable-next-line:jsx-no-lambda
      <div ref={(ref: any) => (this.carouselContainerRef = ref)}>
        <CarouselContainer>
          <ChevronLeft
            className={`icon ${this.state.isLeftArrowActive ? "active-icon" : "inactive-icon"}`}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.showPrevious()}
          />
          {this.renderImages()}
          <ChevronRight
            className={`icon ${this.state.isRightArrowActive ? "active-icon" : "inactive-icon"}`}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.showNext()}
          />

          {this.state.showFullScreenImageContainer && <FullScreen />}
          {this.state.showFullScreenImageContainer && (
            <FullScreenImageContainer>
              <ChevronLeft
                className={`icon icon-full-left ${this.state.isLeftArrowActiveFullScreen ? "active-icon-full" : "inactive-icon-full"}`}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.showPreviousFullScreen()}
              />
              <FullScreenImage imagePath={this.state.activeImagePath} />
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Close className="close" onClick={() => this.exitFullScreenImage()} />
              <ChevronRight
                className={`icon icon-full-right ${this.state.isRightArrowActiveFullScreen ? "active-icon-full" : "inactive-icon-full"}`}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.showNextFullScreen()}
              />
            </FullScreenImageContainer>
          )}
        </CarouselContainer>
      </div>
    );
  }

  private readonly renderImages = () => {
    const subItems = this.props.images.slice(this.state.startIndex, this.state.endIndex);

    return subItems.map((image: string) => {
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
      }, () => this.setState({
        isLeftArrowActive: this.state.startIndex > 1,
        isRightArrowActive: this.state.endIndex < this.props.images.length,
      }));
    } else {
      this.setState({
        isLeftArrowActive: false,
        isRightArrowActive: this.state.endIndex < this.props.images.length,
      });
    }
  };

  private readonly showNext = () => {
    if (this.state.endIndex !== this.props.images.length) {
      this.setState({
        startIndex: this.state.startIndex + 1,
        endIndex: this.state.endIndex + 1,
      }, () => this.setState({
        isLeftArrowActive: this.state.startIndex > 1,
        isRightArrowActive: this.state.endIndex <= this.props.images.length - 1,
      }));
    } else {
      this.setState({
        isLeftArrowActive: this.state.startIndex > 1,
        isRightArrowActive: false,
      });
    }
  };

  private readonly showPreviousFullScreen = () => {
    if (this.state.indexFullScreen - 1 > 0) {
      this.setState({
        indexFullScreen: this.state.indexFullScreen - 1,
      }, () => this.setState({
        isLeftArrowActiveFullScreen: this.state.indexFullScreen > 1,
        isRightArrowActiveFullScreen: this.state.indexFullScreen + 1 < this.props.images.length,
        activeImagePath: this.props.images[this.state.indexFullScreen],
      }));
    } else {
      this.setState({
        isLeftArrowActiveFullScreen: false,
        isRightArrowActiveFullScreen: this.state.indexFullScreen + 1 < this.props.images.length,
      });
    }
  };

  private readonly showNextFullScreen = () => {
    if (this.state.indexFullScreen + 1 < this.props.images.length) {
      this.setState({
        indexFullScreen: this.state.indexFullScreen + 1,
        isRightArrowActiveFullScreen: true,
      }, () => this.setState({
        isLeftArrowActiveFullScreen: this.state.indexFullScreen > 1,
        isRightArrowActiveFullScreen: this.state.indexFullScreen + 1 < this.props.images.length,
        activeImagePath: this.props.images[this.state.indexFullScreen],
      }));
    } else {
      this.setState({
        isLeftArrowActiveFullScreen: this.state.indexFullScreen > 1,
        isRightArrowActiveFullScreen: false,
      });
    }
  };

  private readonly showFullScreenImage = (imagePath: string) => {
    const index = this.props.images.indexOf(imagePath);
    this.setState({
      indexFullScreen: index,
      showFullScreenImageContainer: true,
      activeImagePath: imagePath,
    }, () => this.setState({
      isLeftArrowActiveFullScreen: this.state.indexFullScreen > 1,
      isRightArrowActiveFullScreen: this.state.indexFullScreen + 1 < this.props.images.length,
    }));
  };

  private readonly exitFullScreenImage = () => {
    this.setState({
      showFullScreenImageContainer: false,
      indexFullScreen: 1,
      isLeftArrowActiveFullScreen: false,
      isRightArrowActiveFullScreen: false,
    });
  };

  private readonly updateWindowDimensions = (): void => {
    this.setState({ containerWidth: this.carouselContainerRef.clientWidth }, () => {
      const widthWithoutArrows = this.state.containerWidth - 40;
      const carouselItems = Math.floor(widthWithoutArrows / 180);
      this.setState({
        endIndex: this.state.startIndex + carouselItems,
        isRightArrowActive: this.props.images.length - 1 > carouselItems,
      });
    });
  };
}
