import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors, responsiveHeight} from '../../utils';
import useProfle from '../../hooks/useProfile';

export default function Profile() {
  const profile = useProfle();
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={profile?.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(650),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatar: {
    marginTop: -50,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 20,
  },
});
