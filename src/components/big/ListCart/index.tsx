import {View} from 'react-native';
import React from 'react';
import CardCart from '../../small/CardCart';
import {ICart} from '../../../data/interface/cart';

export interface IListJerseyProps {
  carts: ICart[];
}

export default function ListCart(props: IListJerseyProps) {
  return (
    <View>
      {props.carts.map(item => (
        <CardCart key={item.id} cart={item} />
      ))}
    </View>
  );
}

// const styles = StyleSheet.create({});
