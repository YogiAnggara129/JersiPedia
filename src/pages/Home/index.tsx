import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/big/HeaderComponent';
import {colors, fonts} from '../../utils';
import {BannerSlider, SizedBox} from '../../components';
import ListLiga from '../../components/big/ListLiga';
import {ILiga} from '../../data/interface/liga';
import ListJersey from '../../components/big/ListJersey';
import {CustomTextButton} from '../../components/small/CustomButton';
import useListLiga from '../../hooks/useListLiga';
import useListJersey from '../../hooks/useListJersey';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import {getUser, user} from '../../reducers/user';
import {getProvincies, province} from '../../reducers/province';

function Home() {
  const [ligaSelected, setLigaSelected] = useState<ILiga | undefined>();
  const listLiga = useListLiga(ligas => setLigaSelected(ligas[0]));
  const listJersey = useListJersey(ligaSelected);
  const userData = useAppSelector(user);
  const provinceData = useAppSelector(province);
  const dispatch = useAppDispatch();

  // console.log(dataUser);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getProvincies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{String(provinceData.fetchStatus.status)}</Text>
        <Text>{String(provinceData.data![0].province)}</Text>
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.chooseLigaContainer}>
          <Text style={styles.label}>Pilih Liga {userData.email}</Text>
          <ListLiga ligas={listLiga} />
          <SizedBox height={10} />
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
            Inginkan
          </Text>
          <ListJersey jerseys={listJersey} />
          <CustomTextButton text="Lihat Semua" />
          <SizedBox height={100} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white},
  chooseLigaContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {fontSize: 18, fontFamily: fonts.primary.regular, marginBottom: 5},
  boldLabel: {fontFamily: fonts.primary.bold},
});
