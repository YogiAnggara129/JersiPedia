import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {
  CustomTextAreaInput,
  CustomTextInput,
} from '../../components/small/CustomInput';
import useProfle from '../../hooks/useProfile';
import CustomDropdown from '../../components/small/CustomDropdown';
import {
  CustomButton,
  CustomTextButton,
} from '../../components/small/CustomButton';
import {ArrowRightIc} from '../../assets';

export default function ProfileEdit() {
  const profile = useProfle();
  const provincies: string[] = [];
  const cities: string[] = [];
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput label="Nama" value={profile?.name} />
        <CustomTextInput label="Email" value={profile?.email} />
        <CustomTextInput label="No. Handphone" value={profile?.phoneNumber} />
        <CustomTextAreaInput label="Alamat" value={profile?.address} />

        <CustomDropdown label="Provinsi" datas={provincies} />
        <CustomDropdown label="Kota/Kab" datas={cities} />

        <View style={styles.inputFoto}>
          <Text style={styles.label}>Foto Profile :</Text>

          <View style={styles.wrapperUpload}>
            <Image source={profile?.avatar} style={styles.foto} />

            <View style={styles.tombolChangePhoto}>
              <CustomTextButton text="Change Photo" padding={7} />
            </View>
          </View>
        </View>

        <View style={styles.submit}>
          <CustomButton
            text="Submit"
            icon={<ArrowRightIc />}
            padding={responsiveHeight(15)}
            fontSize={18}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
