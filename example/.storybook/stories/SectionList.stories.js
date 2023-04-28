import React from 'react';
import { SectionListPaginationExample } from '../../examples/SectionList/Pagination';
import { SectionListPullToRefreshExample } from '../../examples/SectionList/PullToRefresh';

const SectionListMeta = {
  title: 'SectionList',
  component: SectionListPaginationExample,
};

export default SectionListMeta;

export const Pagination = {
  component: SectionListPaginationExample,
};

export const AdvancedPullToRefresh = ()=> <SectionListPullToRefreshExample />;
AdvancedPullToRefresh.storyName = 'Pull to refresh'
