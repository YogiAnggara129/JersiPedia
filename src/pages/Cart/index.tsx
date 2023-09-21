import {StyleSheet, View} from 'react-native';
import React from 'react';
import ListCart from '../../components/big/ListCart';
import {colors} from '../../utils';
import useListOrder from '../../hooks/useListCart';

export default function Cart() {
  const orders = useListOrder();
  return (
    <View style={styles.page}>
      <ListCart carts={orders[0].pesanans} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
