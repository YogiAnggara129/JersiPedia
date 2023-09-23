import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IProfile} from '../../../data/interface/profile';

interface ICardAddress {
  profile: IProfile;
}

export default function CardAddress(props: ICardAddress) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alamat Saya :</Text>
      <Text style={styles.alamat}>{props.profile.address} </Text>
      <Text style={styles.alamat}>Kota/Kab. {props.profile.city}</Text>
      <Text style={styles.alamat}>Provinsi {props.profile.province}</Text>
      <TouchableOpacity>
        <Text style={styles.ubahAlamat}>Ubah Alamat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    marginBottom: 5,
  },
  alamat: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
  ubahAlamat: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.primary,
    textAlign: 'right',
  },
});
