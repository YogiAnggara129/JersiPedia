declare module 'react-native-image-slider-box' {
  import React from 'react';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import {SliderBox} from 'react-native-image-slider-box';
  interface ISliderBox {
    images: any[];
    autoplay?: boolean;
    circleLoop: boolean;
    sliderBoxHeight: number;
    ImageComponentStyle: React.StyleHTMLAttributes;
    dotStyle: React.StyleHTMLAttributes;
    dotColor: string;
    imageLoadingColor: string;
    onCurrentImagePressed?: (index: number) => void;
  }

  export function SliderBox({
    images,
    autoplay,
    circleLoop,
    sliderBoxHeight,
    ImageComponentStyle,
    dotStyle,
    dotColor,
    imageLoadingColor,
    onCurrentImagePressed,
  }: ISliderBox): React.JSX;
}
