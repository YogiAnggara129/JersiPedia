import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {responsiveHeight} from '../../../utils/measure';
import {colors, fonts} from '../../../utils';
import {SearchIc} from '../../../assets/icons';
import {CartButton} from '../../small/CustomButton';
import SizedBox from '../../small/SizedBox';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../router';

export default function HeaderComponent() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.searchSection}>
          <SearchIc />
          <TextInput placeholder="Cari Jersey. . ." style={styles.input} />
        </View>
        <SizedBox width={10} />
        <CartButton totalCart={5} onPress={() => navigation.navigate('Cart')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(150),
    backgroundColor: colors.primary,
  },
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 30,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
