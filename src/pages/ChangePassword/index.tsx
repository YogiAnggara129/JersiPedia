import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, responsiveHeight} from '../../utils';
import {ArrowRightIc} from '../../assets';
import {CustomTextInput} from '../../components/small/CustomInput';
import {CustomButton} from '../../components/small/CustomButton';

export default function ChangePassword() {
  return (
    <View style={styles.pages}>
      <View>
        <CustomTextInput label="Password Lama" secureTextEntry />
        <CustomTextInput label="Password Baru" secureTextEntry />
        <CustomTextInput label="Konfirmasi Password Baru" secureTextEntry />
      </View>

      <View style={styles.submit}>
        <CustomButton
          text="Submit"
          icon={<ArrowRightIc />}
          padding={responsiveHeight(15)}
          fontSize={18}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  submit: {
    marginVertical: 30,
  },
});
