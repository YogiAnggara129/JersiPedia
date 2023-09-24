import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Illustration, Logo} from '../../assets';
import {colors, fonts, responsiveHeight} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CustomTextInput} from '../../components/small/CustomInput';
import {SizedBox} from '../../components';
import {CustomTextButton} from '../../components/small/CustomButton';
import {RootStackParamList} from '../../router';

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.pages}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.cardLogin}>
        <CustomTextInput label="Email" />
        <CustomTextInput label="Password" secureTextEntry />
        <SizedBox height={25} />
        <CustomTextButton text="Login" padding={12} fontSize={18} />
      </View>

      <View style={styles.register}>
        <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
        <Text
          style={styles.textBlue}
          onPress={() => navigation.navigate('Register1')}>
          Klik Untuk Daftar
        </Text>
      </View>

      <View style={styles.ilustrasi}>
        <Illustration />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(70),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
});
