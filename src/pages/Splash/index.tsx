import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Illustration, Logo} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Splash() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.pages}>
      <Logo />
      <View style={styles.illustration}>
        <Illustration />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  illustration: {position: 'absolute', bottom: 0, right: 0},
});
