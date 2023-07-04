import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IJersey} from '../../../data/interface/jersey';
import {fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {CustomTextButton} from '../CustomButton';
import SizedBox from '../SizedBox';

export interface ICardJerseyProps {
  jersey: IJersey;
}

export default function CardJersey(props: ICardJerseyProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={props.jersey.gambar[0]} />
        <Text style={styles.title}>{props.jersey.nama}</Text>
      </View>
      <SizedBox height={5} />
      <CustomTextButton text="Detail" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: responsiveWidth(150),
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: '#FFF6D5',
    borderRadius: 5,
    // width: responsiveWidth(160),
    // height: responsiveHeight(200),
  },
  image: {
    height: responsiveHeight(124),
    objectFit: 'scale-down',
  },
  title: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.primary.bold,
    color: 'black',
  },
});
