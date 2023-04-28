import { FlatListPaginationExample } from '../../examples/FlatList/Pagination';
import { AdvancedFlatListPaginationExample } from '../../examples/FlatList/AdvancedPagination';
import { FlatListPullToRefreshExample } from '../../examples/FlatList/PullToRefresh';

const FlatListMeta = {
  title: 'FlatList',
  component: FlatListPaginationExample,
};

export default FlatListMeta;

export const SimplePagination = ()=> <FlatListPaginationExample />;
SimplePagination.storyName = 'Basic Pagination'

export const AdvancedPagination = ()=> <AdvancedFlatListPaginationExample />;
AdvancedFlatListPaginationExample.storyName = 'Advanced Pagination'


export const AdvancedPullToRefresh = ()=> <FlatListPullToRefreshExample />;
AdvancedPullToRefresh.storyName = 'Pull to refresh'
