import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, fonts} from '../../../utils';

type Props = {
  isFocused: boolean;
  options: any;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  icon?: (isFocused: boolean) => ReactNode | null;
};

const TabItem = (props: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={props.isFocused ? {selected: true} : {}}
      accessibilityLabel={props.options.tabBarAccessibilityLabel}
      testID={props.options.tabBarTestID}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={styles.container}>
      {props.icon && props.icon(props.isFocused)}
      <Text style={props.isFocused ? styles.textActive : styles.textUnactive}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  textActive: {
    color: colors.white,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  },
  textUnactive: {
    color: colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  },
});
