import React from 'react';
import { SectionListPaginationExample } from '../../examples/SectionListPaginationExample';
import { SectionListPullToRefreshExample } from '../../examples/SectionListPullToRefreshExample';

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
