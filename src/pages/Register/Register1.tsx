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
import {
  CustomButton,
  CustomIconButton,
} from '../../components/small/CustomButton';
import {ArrowRightIc} from '../../assets';
import {SizedBox} from '../../components';
import {CustomTextInput} from '../../components/small/CustomInput';
import {colors, fonts, responsiveWidth} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../router';

export default function Register1() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.btnBack}>
            <CustomIconButton
              icon="arrow-left"
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.ilustrasi}>
            {/* <IlustrasiRegister1 /> */}
            <SizedBox height={5} />
            <Text style={styles.title}>Daftar</Text>
            <Text style={styles.title}>Isi Daftar Diri Anda</Text>

            <View style={styles.wrapperCircle}>
              <View style={styles.circlePrimary} />
              <SizedBox width={10} />
              <View style={styles.circleDisabled} />
            </View>
          </View>

          <View style={styles.card}>
            <CustomTextInput label="Nama" />
            <CustomTextInput label="Email" />
            <CustomTextInput label="No. Handphone" keyboardType="number-pad" />
            <CustomTextInput label="Password" secureTextEntry />
            <SizedBox height={25} />
            <CustomButton
              text="Continue"
              icon={<ArrowRightIc />}
              padding={10}
              fontSize={18}
              onPress={() => navigation.navigate('Register2')}
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
