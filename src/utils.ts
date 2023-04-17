import type { List } from './types';

export function isVirtualizedList(x: List) {
  return x.current && 'getItemCount' in x.current.props;
}
export function isSectionList(x: List) {
  return x.current && 'sections' in x.current.props;
}
