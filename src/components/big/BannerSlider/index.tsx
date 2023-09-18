import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Slider1, Slider2} from '../../../assets';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
import {SliderBox} from 'react-native-image-slider-box';

export default function BannerSlider() {
  const images = [Slider1, Slider2];
  return (
    <View>
      <View style={styles.container}>
        <SliderBox
          images={images}
          autoplay={true}
          circleLoop={true}
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          dotColor={colors.primary}
          imageLoadingColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidth(354),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
