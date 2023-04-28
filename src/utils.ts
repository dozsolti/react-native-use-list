import type { ListReference } from './types';

export function isVirtualizedList(x: ListReference) {
  return x.current && 'getItemCount' in x.current.props;
}
export function isSectionList(x: ListReference) {
  return x.current && 'sections' in x.current.props;
}
