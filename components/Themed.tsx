/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText, useColorScheme,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableOpacityProps as DefaultTouchableOpacityProps
} from 'react-native';
import { SearchBar as DefaultSearchBar, SearchBarProps, SearchBarDefaultProps } from '@rneui/themed';

import Colors from '../constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
export type SearchProps = ThemeProps & SearchBarProps & SearchBarDefaultProps;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SearchBar(props: SearchProps) {
  const { ref, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: 'white', dark: 'black' }, 'background');
  const inputContainerColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const themeLight = useColorScheme() === 'light' ? true :
    useColorScheme() === 'dark' ? false :
      undefined;

  return <DefaultSearchBar containerStyle={{ backgroundColor }} inputContainerStyle={{ backgroundColor: inputContainerColor }} lightTheme={themeLight} {...otherProps} />;
}
