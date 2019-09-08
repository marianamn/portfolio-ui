import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

export const CarouselContainer = styled("div")`
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid #333333;
  }

  .carousel .thumbs-wrapper {
    margin: 20px 0;
  }

  .carousel .thumbs {
    padding-left: 0;
  }

  .carousel .slide {
    background: #b5b5b5;
  }

  /* .carousel .slide img {
    max-height: 500px;
    width: auto;
  } */
`;

interface Props {
  readonly images: ReadonlyArray<string>;
  readonly areImagesLoaded: (imagesLoaded: boolean) => void;
}

let loadedImages: any = [];

export default class ImageCarousel extends React.Component<Props, {}> {
  componentWillUnmount(): void {
    loadedImages = [];
  }

  render(): JSX.Element {
    return (
      <CarouselContainer>
        <Carousel
          showArrows
          showStatus={false}
          showIndicators={false}
          useKeyboardArrows
          dynamicHeight
        >
          {this.renderImages()}
        </Carousel>
      </CarouselContainer>
    );
  }

  private readonly renderImages = () => {
    const subItems = this.props.images.slice(1, this.props.images.length);

    return subItems.map((image: string) => {
      return (
        <div key={image}>
          <img
            src={image}
            onLoad={() => this.loadImage(image)}
            onError={() => this.loadImage(image)}
          />
        </div>
      );
    });
  };

  private readonly loadImage = (image: string) => {
    if (loadedImages.indexOf(image) === -1) {
      loadedImages.push(image);
    }

    if (loadedImages.length === this.props.images.length - 1) {
      this.props.areImagesLoaded(true);
    }
  };
}
