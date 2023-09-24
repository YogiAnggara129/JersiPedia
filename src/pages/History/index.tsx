import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import ListHistory from '../../components/big/ListHistory';
import useListOrder from '../../hooks/useListCart';

export default function History() {
  const orders = useListOrder();
  return (
    <View style={styles.pages}>
      {orders !== undefined && <ListHistory orders={orders} />}
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
