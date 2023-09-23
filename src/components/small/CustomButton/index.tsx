/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, fonts} from '../../../utils';
import {CartIc} from '../../../assets/icons';
import SizedBox from '../SizedBox';

type CustomButtonActionProps = {
  onPress?: () => void;
};

type CustomIconButtonProps = {
  icon: ReactNode;
  badgeNumber?: number;
};

type CustomTextButtonProps = {
  text: string;
  fontSize?: number;
};

type CustomButtonStyleProps = {
  padding?: number;
};

export function CustomIconButton(
  props: CustomIconButtonProps &
    CustomButtonActionProps &
    CustomButtonStyleProps,
) {
  return (
    <TouchableOpacity
      style={{...styles.container, padding: props.padding ?? 10}}
      onPress={props.onPress}>
      {props.icon}
      {(props.badgeNumber ?? 0) > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{props.badgeNumber}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export function CustomTextButton(
  props: CustomTextButtonProps &
    CustomButtonActionProps &
    CustomButtonStyleProps,
) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
        padding: props.padding ?? 5,
      }}
      onPress={props.onPress}>
      <Text style={{...styles.title, fontSize: props.fontSize}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export function CustomButton(
  props: CustomTextButtonProps &
    CustomIconButtonProps &
    CustomButtonActionProps &
    CustomButtonStyleProps,
) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: props.padding ?? 5,
      }}
      onPress={props.onPress}>
      {props.icon}
      <SizedBox width={10} />
      <Text style={{...styles.title, fontSize: props.fontSize}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export function CartButton(
  props: {totalCart?: number} & CustomButtonActionProps,
) {
  return (
    <CustomIconButton
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
  title: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary.bold,
  },
});
