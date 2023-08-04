import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMenu} from '../../../data/interface/menu';
import {ArrowRightIc} from '../../../assets';
import {colors, fonts, responsiveHeight} from '../../../utils';
import SizedBox from '../SizedBox';

interface ICardMenuProps {
  menu: IMenu;
}

export default function CardMenu(props: ICardMenuProps) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {props.menu.image}
        <SizedBox width={20} />
        <Text style={styles.text}>{props.menu.name}</Text>
      </View>
      <ArrowRightIc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(20),
    borderRadius: 10,
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
