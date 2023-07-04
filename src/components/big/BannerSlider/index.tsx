import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Carousel} from 'react-native-basic-carousel';
import {Slider1, Slider2} from '../../../assets';
import {colors, responsiveHeight} from '../../../utils';

export default function BannerSlider() {
  const images = [Slider1, Slider2];
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={({item}) => (
          <View>
            <Image source={item} resizeMode="cover" style={styles.image} />
          </View>
        )}
        itemWidth={width}
        // onSnapToItem={(item: any) => console.log(item)}
        paginationColor={colors.primary}
        paginationType="circle"
        // autoplayDelay={500}
        bounces
        // pagination
        autoplay
      />
    </View>
  );
}

const width = Dimensions.get('window').width - 30 * 2;
const height = responsiveHeight(132);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: responsiveHeight(-35),
  },
  image: {width, height, borderRadius: 10},
});
