import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import slider from '../../assets/img/slider.png';

export default function HeaderCarousels() {
  return (
    <div>
      <Carousel withIndicators height="auto" slideGap="md" loop align="start" slidesToScroll="auto">
        <Carousel.Slide>
          <Image src={slider} alt="Random image" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={slider} alt="Random image" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={slider} alt="Random image" />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
