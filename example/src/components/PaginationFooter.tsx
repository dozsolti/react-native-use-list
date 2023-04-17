import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const PaginationFooter = ({
  pageIndex,
  nextPage,
  prevPage,
}: {
  pageIndex: number | string;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}) => {
  return (
    <View style={styles.footer}>
      <Button text="<" onPress={prevPage} />
      <Text style={styles.footerIndex}>{pageIndex}</Text>
      <Button text=">" onPress={nextPage} />
    </View>
  );
};

export default PaginationFooter;

const styles = StyleSheet.create({
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#e3e2e9',
  },
  footerIndex: { flex: 1, textAlign: 'center', alignSelf: 'center' },
});
