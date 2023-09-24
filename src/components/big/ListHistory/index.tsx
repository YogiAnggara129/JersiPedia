import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CardHistory from '../../small/CardHistory';
import {IOrder} from '../../../data/interface/order';

interface IListHistoryProps {
  orders: IOrder[];
}

export default function ListHistory(props: IListHistoryProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {props.orders.map(pesanan => (
          <CardHistory order={pesanan} key={pesanan.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
});
