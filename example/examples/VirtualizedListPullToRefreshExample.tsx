import React, { useState } from 'react';
import { VirtualizedList, StyleSheet, Text } from 'react-native';
import { ListItem } from '../src/components';
import { generateRandomColor } from '../src/utils/colors';
import { useList } from 'react-native-use-list';

const list1 = generateRandomColor(5);
const list2 = generateRandomColor(10);

export const VirtualizedListPullToRefreshExample = () => {
  const [data, setData] = useState(list1);

  const getItem = (_x: any, index: number) => data[index] || '';

  const getItemCount = () => data.length;

  const updateData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(list2);
        resolve(true);
      }, 1000 * 2);
    });
  };

  const { isRefreshing, refreshController } = useList({
    onRefresh: updateData,
  });

  return (
    <>
      <Text
        style={styles.title}
      >{`isRefreshing: ${isRefreshing} - Length: ${data.length}`}</Text>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({ index }) => <ListItem text={index} />}
        keyExtractor={(item: string) => item}
        getItemCount={getItemCount}
        getItem={getItem}
        style={styles.list}
        {...refreshController}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
});
