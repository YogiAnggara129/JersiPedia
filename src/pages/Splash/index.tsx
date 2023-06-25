import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Illustration, Logo} from '../../assets';

type ISplashProps = {
  navigation: any;
};

export default function Splash({navigation}: ISplashProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
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
