import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListCart from '../../components/big/ListCart';
import {colors, fonts, responsiveHeight} from '../../utils';
import useListOrder from '../../hooks/useListCart';
import {CustomButton} from '../../components/small/CustomButton';
import {CartWhiteIc} from '../../assets';
// import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const orders = useListOrder();
  // const orders = dummyPesanans;
  const carts = orders[0];
  // const navigation = useNavigation();
  return (
    orders !== undefined &&
    carts !== undefined && (
      <View style={styles.page}>
        <ListCart carts={carts.pesanans} />
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>Rp. {carts.totalHarga}</Text>
          </View>
          <CustomButton
            text="Check Out"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon={<CartWhiteIc />}
            // onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textBold: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
  },
});
