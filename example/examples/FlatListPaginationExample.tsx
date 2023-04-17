import React, { useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, ListItem } from '../src/components';
import { useList } from 'react-native-use-list';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '26c8cc80-85f5-4237-9e9f-cd7fcb1b67c1',
    title: 'Fourth Item',
  },
  {
    id: 'a3d3b86c-7b2f-4e63-aa57-ba48ddefa168',
    title: 'Fifth Item',
  },
  {
    id: 'e1a6c487-6e60-43b8-b262-72f7c77bb9ac',
    title: 'Sixth Item',
  },
  {
    id: '1a9818aa-47f5-4a10-9de5-5c5d5a5c4eb4',
    title: 'Seventh Item',
  },
  {
    id: '9a2d3908-811f-4e04-85b5-0cc0c8cc822f',
    title: 'Eighth Item',
  },
  {
    id: 'c7f41784-ecf5-4798-981f-85bb7f5e7949',
    title: 'Ninth Item',
  },
  {
    id: '456a1a6b-4e8e-4f3e-ba62-11a2c0078aae',
    title: 'Tenth Item',
  },
];

export const FlatListPaginationExample = () => {
  const listRef = useRef<FlatList>(null);

  const { pageIndex, nextPage, prevPage, indexController } = useList(listRef);

  return (
    <>
      <FlatList
        ref={listRef}
        data={DATA}
        // horizontal
        renderItem={({ index }) => (
          <ListItem text={index} isFocused={index === pageIndex} />
        )}
        {...indexController}
        style={styles.list}
      />
      <View style={styles.footer}>
        <Button text="<" onPress={prevPage} />
        <Text style={styles.footerIndex}>{pageIndex}</Text>
        <Button text=">" onPress={nextPage} />
      </View>
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
  footerIndex: { flex: 1, textAlign: 'center', alignSelf: 'center' },
});
