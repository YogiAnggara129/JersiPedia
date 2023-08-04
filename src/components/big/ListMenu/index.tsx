import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IMenu} from '../../../data/interface/menu';
import CardMenu from '../../small/CardMenu';

interface IListMenuProps {
  menus: IMenu[];
}

export default function ListMenu(props: IListMenuProps) {
  return (
    <View style={styles.container}>
      {props.menus.map(menu => (
        <CardMenu menu={menu} key={menu.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
