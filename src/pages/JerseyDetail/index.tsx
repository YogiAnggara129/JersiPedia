import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import CustomIconButton, {
  CustomButton,
} from '../../components/small/CustomButton';
import {BackIc, CartIc, CartWhiteIc} from '../../assets';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../router';
import {RFValue} from 'react-native-responsive-fontsize';
import {SizedBox} from '../../components';
import CardLiga from '../../components/small/CardLiga';
import JerseySlider from '../../components/big/JerseySlider';
import {
  CustomTextAreaInput,
  CustomTextInput,
} from '../../components/small/CustomInput';
import CustomDropdown from '../../components/small/CustomDropdown';

export default function JerseyDetail() {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList>>();
  return (
    <View style={styles.page}>
      <JerseySlider images={params?.data.gambar ?? []} />
      <View style={styles.button}>
        <CustomIconButton
          icon={<BackIc />}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.liga}>
          <CardLiga liga={params?.data.liga} />
        </View>
        <SizedBox height={5} />
        <Text style={styles.title} numberOfLines={2}>
          {params?.data.nama}
        </Text>
        <SizedBox height={5} />
        <Text style={styles.price}>Harga : Rp{params?.data.harga}</Text>
        <View style={styles.line} />

        <View style={styles.wrapperJenisBerat}>
          <Text>Jenis : {params?.data.jenis}</Text>
          <SizedBox width={20} />
          <Text>Berat : {params?.data.berat}</Text>
        </View>

        <SizedBox height={10} />
        <View style={styles.wrapperInput}>
          <CustomTextInput
            label={'Jumlah'}
            fontSize={13}
            width={responsiveWidth(166)}
            height={responsiveHeight(33)}
          />
          <CustomDropdown
            label={'Pilih Ukuran'}
            datas={params?.data.ukuran ?? []}
            fontSize={13}
            width={responsiveWidth(166)}
            height={responsiveHeight(33)}
          />
        </View>

        <SizedBox height={10} />
        <CustomTextAreaInput label={'Jumlah'} fontSize={13} />

        <SizedBox height={10} />
        <CustomButton
          icon={<CartWhiteIc />}
          text="Masuk Keranjang"
          // fontSize={18}
          // padding={responsiveHeight(17)}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(520),
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
    marginVertical: 10,
  },
  wrapperJenisBerat: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
