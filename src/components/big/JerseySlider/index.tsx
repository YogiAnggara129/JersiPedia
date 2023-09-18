import {Modal, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
import ImageViewer from 'react-native-image-zoom-viewer';
import {IImageInfo} from 'react-native-image-zoom-viewer/built/image-viewer.type';
import {SliderBox} from 'react-native-image-slider-box';

interface IJerseySliderProps {
  images: any[];
}
export default function JerseySlider({images}: IJerseySliderProps) {
  const [openImage, setOpenImage] = useState(false);
  const [previewImage, setPreviewImage] = useState<IImageInfo[]>([]);

  const clickPreview = (index: any) => {
    setOpenImage(true);
    setPreviewImage([{url: '', props: {source: images[index]}}]);
  };

  return (
    <View>
      <SliderBox
        images={images}
        circleLoop
        sliderBoxHeight={responsiveHeight(430)}
        ImageComponentStyle={styles.jersey}
        dotStyle={styles.dotStyle}
        dotColor={colors.primary}
        imageLoadingColor={colors.primary}
        onCurrentImagePressed={(index: number) => clickPreview(index)}
      />

      <Modal visible={openImage} transparent={true}>
        <ImageViewer
          imageUrls={previewImage}
          backgroundColor={colors.primary}
          onClick={() => setOpenImage(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  jersey: {
    marginTop: 25,
    width: responsiveWidth(344),
  },
  dotStyle: {
    marginTop: -50,
  },
});
