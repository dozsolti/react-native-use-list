import type { RefObject } from 'react';
import type { FlatList, SectionList, VirtualizedList } from 'react-native';

export type List =
  | RefObject<FlatList>
  | RefObject<VirtualizedList<any>>
  | RefObject<SectionList>;

export type Options = {
  loopPages?: boolean;
  debugMode?: boolean;
};
