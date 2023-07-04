import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardJersey from '../../small/CardJersey';
import {IJersey} from '../../../data/interface/jersey';
import {SizedBox} from '../../small';

export interface IListJerseyProps {
  jerseys: IJersey[];
}

export default function ListJersey(props: IListJerseyProps) {
  return (
    <View style={styles.container}>
      {props.jerseys.map(jersey => (
        <View key={jersey.id}>
          <CardJersey jersey={jersey} />
          <SizedBox height={15} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
