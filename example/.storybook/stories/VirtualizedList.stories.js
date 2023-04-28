import React from 'react';
import { VirtualizedListPaginationExample } from '../../examples/VirtualizedList/Pagination';
import { VirtualizedListPullToRefreshExample } from '../../examples/VirtualizedList/PullToRefresh';

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
