import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICart} from '../../../data/interface/cart';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {RemoveIc} from '../../../assets';

interface ICardCartProps {
  cart: ICart;
}

export default function CardCart(props: ICardCartProps) {
  return (
    <View style={styles.container}>
      <Image source={props.cart.product.gambar[0]} style={styles.image} />
      <View style={styles.desc}>
        <Text style={styles.name}>{props.cart.product.nama}</Text>
        <Text style={styles.text}>Rp. {props.cart.product.harga}</Text>
        <Text style={styles.textBold}>Pesan : {props.cart.jumlahPesan}</Text>
        <Text style={styles.textBold}>Ukuran : {props.cart.ukuran}</Text>
        <Text style={styles.textBold}>
          Total Harga : Rp. {props.cart.totalHarga}
        </Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.textBold}>{props.cart.keterangan}</Text>
      </View>
      <View style={styles.removeIc}>
        <RemoveIc />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: responsiveWidth(77),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  desc: {},
  removeIc: {
    flex: 1,
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 11,
  },
});
