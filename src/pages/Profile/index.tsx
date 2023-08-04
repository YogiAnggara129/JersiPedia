import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight} from '../../utils';
import useProfle from '../../hooks/useProfile';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constants';
import useListMenu from '../../hooks/useListMenu';
import ListMenu from '../../components/big/ListMenu';

export default function Profile() {
  const profile = useProfle();
  const menus = useListMenu();
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={profile?.avatar} />
        <View style={styles.profile}>
          <Text style={styles.name}>{profile?.name}</Text>
          <Text style={styles.desc}>No. HP : {profile?.phoneNumber}</Text>
          <Text style={styles.desc}>{profile?.address}</Text>
          <Text style={styles.desc}>{profile?.city}</Text>
        </View>
        <ListMenu menus={menus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  container: {
    backgroundColor: colors.white,
    height: responsiveHeight(700),
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
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },
});
