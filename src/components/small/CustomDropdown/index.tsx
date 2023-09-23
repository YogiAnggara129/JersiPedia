import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

interface ICustomDropdownProps {
  label: string;
  datas: string[];
  width?: number;
  height?: number;
  fontSize?: number;
}

// interface ICustomDropdownStyleProps {
//   propsLabel?: TextInputProps;
//   styleLabel?: TextStyle;
//   propsInput?: TextInputProps;
//   styleInput?: TextStyle;
// }

const CustomDropdown = (props: ICustomDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.label,
          fontSize: props.fontSize ?? styles.label.fontSize,
        }}>
        {props.label} :
      </Text>
      <View style={styles.wrapperPicker}>
        <Picker
          style={{
            ...styles.picker,
            width: props.width,
            height: props.height ?? styles.picker.height,
            fontSize: props.fontSize ?? styles.picker.fontSize,
          }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, _) => setSelectedValue(itemValue)}>
          {props.datas.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
  picker: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
    height: responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10,
  },
});
