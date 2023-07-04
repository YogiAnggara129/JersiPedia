import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardLiga from '../../small/CardLiga';
import {ILiga} from '../../../data/interface/liga';

export interface IListLigaProps {
  ligas: ILiga[];
}

export default function ListLiga(props: IListLigaProps) {
  return (
    <View style={styles.container}>
      {props.ligas.map(liga => (
        <CardLiga key={liga.id} liga={liga} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
