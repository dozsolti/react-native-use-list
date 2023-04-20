import React, { useRef } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { ListItem } from '../src/components';
import { useList } from 'react-native-use-list';
import PaginationFooter from '../../example/src/components/PaginationFooter';

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

export const SectionListPaginationExample = () => {
  const ref = useRef<SectionList>(null);

  const {
    pageIndex,
    sectionItemIndex,
    sectionIndex,
    isSectionSelected,
    goToPage,
    nextPage,
    prevPage,
    indexController,
  } = useList({
    ref,
    loopPages: true,
    debugMode: true,
  });

  return (
    <>
      <SectionList
        ref={ref}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <ListItem
            text={item}
            isFocused={index === sectionItemIndex && isSectionSelected(section)}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={[
              styles.header,
              isSectionSelected(section) ? styles.headerFocused : {},
            ]}
          >
            {section.title}
          </Text>
        )}
        {...indexController}
      />
      <PaginationFooter
        {...{ goToPage, nextPage, prevPage }}
        pageIndex={`${pageIndex} | ${DATA[sectionIndex]?.title} - ${DATA[sectionIndex]?.data[sectionItemIndex]}`}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  headerFocused: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
  },
});
