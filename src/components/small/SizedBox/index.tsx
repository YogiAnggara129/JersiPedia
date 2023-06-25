import {View} from 'react-native';
import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

export default function SizedBox(props: Props) {
  return <View style={{width: props.width, height: props.height}} />;
}
