import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import React from 'react';

interface ICustomTextInputProps {
  label: string;
  fontSize?: number;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

interface ICustomTextInputSizeProps {
  width?: number;
  height?: number;
}

interface ICustomTextInputStyleProps {
  propsLabel?: TextInputProps;
  styleLabel?: TextStyle;
  propsInput?: TextInputProps;
  styleInput?: TextStyle;
}

export function CustomTextInput(
  props: ICustomTextInputProps & ICustomTextInputSizeProps,
) {
  return (
    <CustomTextInputBase
      label={props.label}
      styleLabel={{
        ...styles.label,
        fontSize: props.fontSize ?? styles.label.fontSize,
      }}
      styleInput={{
        ...styles.textInput,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize ?? styles.textInput.fontSize,
      }}
      propsInput={{
        secureTextEntry: props.secureTextEntry,
        keyboardType: props.keyboardType,
      }}
    />
  );
}

export function CustomTextAreaInput(props: ICustomTextInputProps) {
  return (
    <CustomTextInputBase
      label={props.label}
      styleLabel={{
        ...styles.label,
        fontSize: props.fontSize ?? styles.label.fontSize,
      }}
      styleInput={{
        ...styles.textAreaInput,
        fontSize: props.fontSize ?? styles.textInput.fontSize,
      }}
      propsInput={{multiline: true, numberOfLines: 3}}
    />
  );
}

export function CustomTextInputBase(
  props: ICustomTextInputProps & ICustomTextInputStyleProps,
) {
  return (
    <View style={styles.container}>
      <Text style={props.styleLabel} {...props.propsLabel}>
        {props.label} :
      </Text>
      <TextInput
        value={props.value}
        style={props.styleInput}
        {...props.propsInput}
      />
    </View>
  );
}

const baseStyle: TextStyle = {
  fontSize: 18,
  fontFamily: fonts.primary.regular,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: colors.border,
  paddingVertical: 5,
  paddingHorizontal: 10,
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  textInput: baseStyle,
  textAreaInput: {...baseStyle, textAlignVertical: 'top'},
});
