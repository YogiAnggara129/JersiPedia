import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILiga} from '../../../data/dummyLigas';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

interface ICardLigaProps {
  liga: ILiga;
}

export default function CardLiga(props: ICardLigaProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.item} source={props.liga.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  item: {
    width: responsiveWidth(57),
    height: responsiveHeight(70),
  },
});
