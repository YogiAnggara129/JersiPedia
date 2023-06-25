import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/big/HeaderComponent';
import {colors, fonts} from '../../utils';
import {BannerSlider} from '../../components';
import ListLiga from '../../components/big/ListLiga';

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <BannerSlider />
      <View style={styles.chooseLigaContainer}>
        <Text style={styles.label}>Pilih Liga</Text>
        <ListLiga />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  chooseLigaContainer: {marginHorizontal: 30, marginTop: 10},
  label: {fontSize: 18, fontFamily: fonts.primary.regular, marginBottom: 5},
});
