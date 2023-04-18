import { FlatListPaginationExample } from '../../examples/FlatListPaginationExample';
import { AdvancedFlatListPaginationExample } from '../../examples/AdvancedFlatListPaginationExample';
import { FlatListPullToRefreshExample } from '../../examples/FlatListPullToRefreshExample';

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
