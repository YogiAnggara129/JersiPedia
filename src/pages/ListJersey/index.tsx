import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {HeaderComponent, SizedBox} from '../../components';
import ListLiga from '../../components/big/ListLiga';
import {CustomTextButton} from '../../components/small/CustomButton';
import ListJerseyComp from '../../components/big/ListJersey';
import {colors, fonts} from '../../utils';
import useListJersey from '../../hooks/useListJersey';
import useListLiga from '../../hooks/useListLiga';
import {ILiga} from '../../data/interface/liga';

export default function ListJersey() {
  const [ligaSelected, setLigaSelected] = useState<ILiga | undefined>();
  const listLiga = useListLiga(ligas => setLigaSelected(ligas[0]));
  const listJersey = useListJersey(ligaSelected);
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView style={styles.chooseLigaContainer}>
        <View>
          <ListLiga ligas={listLiga} />
          <SizedBox height={10} />
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
            Inginkan
          </Text>
          <ListJerseyComp jerseys={listJersey} />
          <CustomTextButton text="Lihat Semua" />
          <SizedBox height={100} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white},
  chooseLigaContainer: {
    marginHorizontal: 30,
    marginTop: -25,
  },
  label: {fontSize: 18, fontFamily: fonts.primary.regular, marginBottom: 5},
  boldLabel: {fontFamily: fonts.primary.bold},
});
