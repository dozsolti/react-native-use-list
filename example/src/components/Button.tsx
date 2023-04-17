import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  text: string;
  style?: ViewStyle;
  onPress: () => void;
};
const Button = ({ text, onPress, style = {} }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#362f5e',
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
