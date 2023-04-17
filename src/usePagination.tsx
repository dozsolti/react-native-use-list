import { useCallback, useRef, useState } from 'react';
import type { List, Options } from './types';
import { isSectionList, isVirtualizedList } from './utils';
import type { SectionList } from 'react-native';
import type { VirtualizedList } from 'react-native';
import type { ViewToken } from 'react-native';
import type { ViewabilityConfig } from 'react-native';

export function usePagination(listRef: List, options: Options) {
  const [pageIndex, setPageIndex] = useState(0);
  const [sectionItemIndex, setSectionItemIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!listRef?.current) return;

    let dataCount = 0;
    if (isVirtualizedList(listRef)) {
      dataCount =
        (listRef.current as VirtualizedList<any>).props.getItemCount?.(null) ||
        0;
    } else if (isSectionList(listRef)) {
      dataCount = (listRef.current as SectionList).props.sections.reduce(
        (count, item) => count + item.data.length,
        0
      );
    } else {
      dataCount = listRef.current.props.data?.length || 0;
    }

    if (options.debugMode && dataCount === 0)
      return console.warn('Pagination does not work on empty lists.');

    if (index < 0 || index >= dataCount) {
      if (options.loopPages) {
        index = (index + dataCount) % dataCount; // loop around
      } else {
        if (options.debugMode)
          console.warn(
            `Page: ${index} is outside bounderies of 0 - ${dataCount}.`
          );
        return;
      }
    }

    if ('scrollToIndex' in listRef.current) {
      setPageIndex(index);
      listRef.current.scrollToIndex({ index });
      return;
    }

    if ('scrollToLocation' in listRef.current) {
      setPageIndex(index);

      let _index = index;
      let sectionIndex = 0;
      let itemIndex = 0;
      while (_index > 0) {
        itemIndex++;

        const sectionICount =
          listRef.current.props.sections[sectionIndex]?.data.length || 0;

        if (itemIndex >= sectionICount) {
          sectionIndex++;
          itemIndex = 0;
        }
        _index--;
      }

      listRef.current.scrollToLocation({
        itemIndex,
        sectionIndex,
      });

      setSectionItemIndex(itemIndex);
      setSectionIndex(sectionIndex);
      return;
    }
  };

  const nextPage = () => {
    scrollToIndex(pageIndex + 1);
  };
  const prevPage = () => {
    scrollToIndex(pageIndex - 1);
  };

  const viewabilityConfig = useRef<ViewabilityConfig>({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  }).current;

  const isSectionSelected = (section: any): boolean => {
    if (!listRef?.current) return false;
    if (!('sections' in listRef.current.props)) return false;

    return listRef.current.props.sections.indexOf(section) === sectionIndex;
  };

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const item = viewableItems[0];
      if (!item || item.index === null) return;

      if (
        'section' in item &&
        listRef.current &&
        'sections' in listRef.current.props
      ) {
        const sectionIndex = listRef.current.props.sections.indexOf(
          item.section
        );
        setSectionItemIndex(item.index);
        setSectionIndex(sectionIndex);

        let count = 0;
        for (let i = 0; i < sectionIndex; i++)
          count += listRef.current.props.sections[i]?.data.length || 0;

        setPageIndex(count + item.index);
      } else {
        setPageIndex(item.index);
      }
    },
    [listRef]
  );

  const indexController = useRef({
    viewabilityConfig,
    onViewableItemsChanged,
  }).current;

  return {
    pageIndex,
    sectionItemIndex,
    sectionIndex,
    isSectionSelected,
    nextPage,
    prevPage,
    goToPage: scrollToIndex,
    indexController,
  };
}
