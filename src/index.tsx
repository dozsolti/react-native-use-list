import type { Options } from './types';
import { usePagination } from './usePagination';
import { usePullToRefresh } from './usePullToRefresh';

export function useList(options: Options = {}) {
  const defaultOptions = {
    ref: null,
    loopPages: false,
    debugMode: false,
    onRefresh: undefined,
  };

  options = Object.assign({ ...defaultOptions }, options);

  const pagination = usePagination(options);
  const pullToRefresh = usePullToRefresh(options);

  return { ...pagination, ...pullToRefresh };
}
