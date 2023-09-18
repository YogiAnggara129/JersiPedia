import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight} from '../../utils';
import CustomIconButton from '../../components/small/CustomButton';
import {BackIc} from '../../assets';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../router';
import {RFValue} from 'react-native-responsive-fontsize';
import {SizedBox} from '../../components';
import CardLiga from '../../components/small/CardLiga';
import JerseySlider from '../../components/big/JerseySlider';

export default function JerseyDetail() {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList>>();
  return (
    <View style={styles.page}>
      <View style={styles.button}>
        <CustomIconButton
          icon={<BackIc />}
          onPress={() => navigation.goBack()}
        />
      </View>
      <JerseySlider images={params?.data.gambar ?? []} />
      <View style={styles.container}>
        <View style={styles.liga}>
          <CardLiga liga={params?.data.liga} />
        </View>
        <SizedBox height={21} />
        <Text style={styles.title} numberOfLines={2}>
          {params?.data.nama}
        </Text>
        <SizedBox height={RFValue(12)} />
        <Text style={styles.price}>Harga : Rp{params?.data.harga}</Text>
        <View style={styles.line} />
        <Text>Jenis : {params?.data.jenis}</Text>
        <Text>Berat : {params?.data.berat}</Text>

        <Text>Jumlah :</Text>
        <TextInput />

        <Text>Pilih Ukuran :</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(493),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
    // width: responsiveWidth(40),
  },
  liga: {alignItems: 'flex-end', marginTop: -30},
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#000000',
    textTransform: 'capitalize',
  },
  price: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(24),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#000000',
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(196, 196, 196, 1.0)',
    marginVertical: 17,
  },
});
