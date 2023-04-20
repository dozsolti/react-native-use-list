import React, { useState } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { ListItem } from '../src/components';
import { useList } from 'react-native-use-list';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export const SectionListPullToRefreshExample = () => {
  const [data, setData] = useState(DATA.slice(0, 2));

  const updateData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(DATA);
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
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListItem text={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        {...refreshController}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
});
