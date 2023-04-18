/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback, useRef, useState } from 'react';
import type {
  List,
  Options,
  ScrollToIndexOptions,
  ScrollToPageOptions,
} from './types';
import { isSectionList, isVirtualizedList } from './utils';
import type { SectionList } from 'react-native';
import type { VirtualizedList } from 'react-native';
import type { ViewToken } from 'react-native';
import type { ViewabilityConfig } from 'react-native';

function getDataCountFromRef(listRef: List): number {
  if (!listRef.current) return 0;

  if (isVirtualizedList(listRef))
    return (
      (listRef.current as VirtualizedList<any>).props.getItemCount?.(null) || 0
    );

  if (isSectionList(listRef))
    return (listRef.current as SectionList).props.sections.reduce(
      (count, item) => count + item.data.length,
      0
    );

  return listRef.current.props.data?.length || 0;
}
export function usePagination(
  listRef: List,
  { debugMode, loopPages }: Options
) {
  const [pageIndex, setPageIndex] = useState(0);
  const [sectionItemIndex, setSectionItemIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  function scrollToIndex(index: number): void;
  function scrollToIndex(options: ScrollToIndexOptions): void;

  function scrollToIndex(params: number | ScrollToIndexOptions) {
    if (!listRef?.current) return;

    const dataCount = getDataCountFromRef(listRef);
    if (debugMode && dataCount === 0)
      return console.warn('Pagination does not work on empty lists.');

    let index: number;
    if (typeof params === 'number') index = params;
    else index = params.index;

    if (index < 0 || index >= dataCount) {
      if (loopPages) {
        index = (index + dataCount) % dataCount; // loop around
      } else {
        if (debugMode)
          console.warn(
            `Page: ${index} is outside bounderies of 0 - ${dataCount}.`
          );
        return;
      }
    }

    if ('scrollToIndex' in listRef.current) {
      setPageIndex(index);
      if (typeof params === 'number') listRef.current.scrollToIndex({ index });
      else
        listRef.current.scrollToIndex({
          index,
          animated: params.animated,
          viewPosition: params.align,
        });
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
  }

  function nextPage(): void;
  function nextPage(options: ScrollToPageOptions): void;

  function nextPage(options?: ScrollToPageOptions) {
    scrollToIndex({
      index: pageIndex + 1,
      ...options,
    });
  }

  function prevPage(): void;
  function prevPage(options: ScrollToPageOptions): void;

  function prevPage(options?: ScrollToPageOptions) {
    scrollToIndex({
      index: pageIndex - 1,
      ...options,
    });
  }

  const viewabilityConfig = useRef<ViewabilityConfig>({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  }).current;

  const isSectionSelected = useCallback(
    (section: any): boolean => {
      if (!listRef?.current) return false;
      if (!('sections' in listRef.current.props)) return false;

      return listRef.current.props.sections.indexOf(section) === sectionIndex;
    },
    [listRef, sectionIndex]
  );

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

  if ((listRef.current?.props as any)?.numColumns > 1) {
    console.warn('Pagination does not work for multiple columns');
  }
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
