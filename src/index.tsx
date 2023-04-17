import type { List, Options } from './types';
import { usePagination } from './usePagination';

export function useList(listRef: List, options?: Options) {
  const defaultOptions = { loopPages: false, debugMode: false }; // todo: merge options

  const pagination = usePagination(listRef, options || defaultOptions);

  return { ...pagination };
}
