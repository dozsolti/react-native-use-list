import { ListItem } from 'example/src/components';
import { generateRandomColor } from 'example/src/utils/colors';
import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useList } from 'react-native-use-list';

const list1 = generateRandomColor(5);
const list2 = generateRandomColor(10);

export const FlatListPullToRefreshExample = () => {
  const [data, setData] = useState(list1);

  const listRef = useRef(null);

  const updateData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(list2);
        resolve(true);
      }, 1000 * 2);
    });
  };

  const { isRefreshing, refreshController } = useList(listRef, {
    onRefresh: updateData,
  });

  return (
    <>
      <Text
        style={styles.title}
      >{`isRefreshing: ${isRefreshing} - Length: ${data.length}`}</Text>
      <FlatList
        ref={listRef}
        data={data}
        renderItem={({ item: color }) => (
          <ListItem text={color} style={{ backgroundColor: color }} />
        )}
        {...refreshController}
      />
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
});
