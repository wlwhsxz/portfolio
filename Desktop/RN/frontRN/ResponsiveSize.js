import {} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const WINDOW_WIDTH = 360;
const WINDOW_HEIGHT = 740;

export function widthPercentage(width) {
  const percentage = (width / WINDOW_WIDTH) * 100;

  return responsiveScreenWidth(percentage);
}

export function heightPercentage(height) {
  const percentage = (height / WINDOW_HEIGHT) * 100;

  return responsiveScreenHeight(percentage);
}

export function fontPercentage(size) {
  const percentage = size * 0.125;

  return responsiveFontSize(percentage);
}
