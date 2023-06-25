import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../../../utils';
import {CartIc} from '../../../assets/icons';

type CustomButtonActionProps = {
  onPress?: () => void;
};

type CustomButtonProps = {
  icon: ReactNode;
  badgeNumber?: number;
};

export default function CustomButton(
  props: CustomButtonProps & CustomButtonActionProps,
) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.icon}
      {(props.badgeNumber ?? 0) > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{props.badgeNumber}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export function CartButton(
  props: {totalCart?: number} & CustomButtonActionProps,
) {
  return (
    <CustomButton
      icon={<CartIc />}
      badgeNumber={props.totalCart}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
  },
  badgeContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: 15,
    height: 15,
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 3,
  },
  badgeText: {
    fontSize: 8,
    color: colors.white,
  },
});
