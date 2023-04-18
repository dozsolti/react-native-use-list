import type { RefObject } from 'react';
import type { FlatList, SectionList, VirtualizedList } from 'react-native';

export type List =
  | RefObject<FlatList>
  | RefObject<VirtualizedList<any>>
  | RefObject<SectionList>;

export type Options = {
  debugMode?: boolean;
} & PaginationOptions &
  PullToRefreshOptions;

export type PaginationOptions = {
  loopPages?: boolean;
};

export type PullToRefreshOptions = {
  onRefresh?: () => Promise<any>;
};

export enum Alignments {
  START = 0,
  CENTER = 0.5,
  END = 1,
}

export type ScrollToIndexOptions = {
  index: number;
  animated?: boolean;
  align?: Alignments;
};

export type ScrollToPageOptions = {
  animated?: boolean;
  align?: Alignments;
};
