import type { List, Options } from './types';
import { usePagination } from './usePagination';
import { usePullToRefresh } from './usePullToRefresh';

export function useList(listRef: List, options: Options = {}) {
  const defaultOptions = {
    loopPages: false,
    debugMode: false,
    onRefresh: undefined,
  };

  options = Object.assign({ ...defaultOptions }, options);

  const pagination = usePagination(listRef, options);
  const pullToRefresh = usePullToRefresh(options);

  return { ...pagination, ...pullToRefresh };
}
