import React from 'react';
import { Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native';

const { width } = Dimensions.get('screen');
type Props = {
  text: string | number;
  isFocused: boolean;
  style?: ViewStyle;
};

const ListItem = ({ text, isFocused, style = {} }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isFocused ? 'red' : 'gray' },
        style,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 10,
    width: width - 20,
    marginBottom: 10,
  },

  text: {
    fontSize: 72,
    color: 'white',
    opacity: 0.7,
  },
});
