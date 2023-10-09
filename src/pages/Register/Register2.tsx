import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../utils';
import {
  CustomButton,
  CustomIconButton,
} from '../../components/small/CustomButton';
import {ArrowRightIc, BackIc} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';
import {SizedBox} from '../../components';
import {CustomTextAreaInput} from '../../components/small/CustomInput';
import CustomDropdown from '../../components/small/CustomDropdown';
import useProvincies from '../../hooks/useProvincies';

export default function Register2() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const provinceData = useProvincies();
  const cities: string[] = [];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.btnBack}>
            <CustomIconButton
              icon={<BackIc />}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.ilustrasi}>
            {/* <IlustrasiRegister2 /> */}
            <SizedBox height={5} />
            <Text style={styles.title}>Isi Alamat</Text>
            <Text style={styles.title}>Lengkap Anda</Text>

            <View style={styles.wrapperCircle}>
              <View style={styles.circleDisabled} />
              <SizedBox width={10} />
              <View style={styles.circlePrimary} />
            </View>
          </View>

          <View style={styles.card}>
            <CustomTextAreaInput label="Alamat" />

            <CustomDropdown
              label="Provinsi"
              datas={provinceData.data?.map(e => e.province) ?? []}
            />
            <CustomDropdown label="Kota/Kab" datas={cities} />
            <SizedBox height={25} />
            <CustomButton
              text="Continue"
              icon={<ArrowRightIc />}
              padding={10}
              fontSize={18}
              onPress={() => navigation.navigate('MainApp')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
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
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 30,
    position: 'absolute',
  },
});
