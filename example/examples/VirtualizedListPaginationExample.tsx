import React, { useRef } from 'react';
import { VirtualizedList, StyleSheet } from 'react-native';
import { ListItem } from '../src/components';
import { generateRandomColor } from '../src/utils/colors';
import { useList } from 'react-native-use-list';
import PaginationFooter from 'example/src/components/PaginationFooter';

const data = generateRandomColor();

const getItem = (_x: any, index: number) => data[index] || '';

const getItemCount = () => data.length;

export const VirtualizedListPaginationExample = () => {
  const listRef = useRef(null);

  const { pageIndex, goToPage, nextPage, prevPage, indexController } = useList(
    listRef,
    {
      loopPages: false,
    }
  );

  return (
    <>
      <VirtualizedList
        ref={listRef}
        horizontal
        initialNumToRender={4}
        renderItem={({ index }) => (
          <ListItem text={index} isFocused={index === pageIndex} />
        )}
        keyExtractor={(item: string) => item}
        getItemCount={getItemCount}
        getItem={getItem}
        style={styles.list}
        {...indexController}
      />
      <PaginationFooter {...{ pageIndex, goToPage, nextPage, prevPage }} />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#e3e2e9',
  },
});
