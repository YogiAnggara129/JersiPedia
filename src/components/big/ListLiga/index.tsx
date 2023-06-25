import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILiga, dummyLigas} from '../../../data/dummyLigas';
import CardLiga from '../../small/CardLiga';

export default function ListLiga() {
  const listLiga = useListLiga();
  return (
    <View style={styles.container}>
      {listLiga.map(liga => (
        <CardLiga liga={liga} />
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

function useListLiga() {
  const [listLiga, setListLiga] = useState<ILiga[]>([]);
  useEffect(() => {
    setListLiga(dummyLigas);
  }, []);

  return listLiga;
}
