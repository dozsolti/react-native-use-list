import React from 'react';
import { VirtualizedListPaginationExample } from '../../examples/VirtualizedListPaginationExample';
import { VirtualizedListPullToRefreshExample } from '../../examples/VirtualizedListPullToRefreshExample';

const VirtualizedListMeta = {
  title: 'VirtualizedList',
  component: VirtualizedListPaginationExample,
};

export default VirtualizedListMeta;

export const Pagination = {
  component: VirtualizedListPaginationExample,
};

export const AdvancedPullToRefresh = ()=> <VirtualizedListPullToRefreshExample />;
AdvancedPullToRefresh.storyName = 'Pull to refresh'
