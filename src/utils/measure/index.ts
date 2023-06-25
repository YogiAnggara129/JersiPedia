import {Dimensions} from 'react-native';
import {heightMobileUI, widthMobileUI} from '../constants';

const windowDimension = Dimensions.get('window');
export const responsiveWidth = (width: number) =>
  (width * windowDimension.width) / widthMobileUI;
export const responsiveHeight = (height: number) =>
  (height * windowDimension.height) / heightMobileUI;
