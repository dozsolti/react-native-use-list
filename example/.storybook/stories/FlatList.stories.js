import { FlatListPaginationExample } from '../../examples/FlatListPaginationExample';
import { AdvancedFlatListPaginationExample } from '../../examples/AdvancedFlatListPaginationExample';

const FlatListMeta = {
  title: 'FlatList',
  component: FlatListPaginationExample,
};

export default FlatListMeta;

export const SimplePagination = ()=> <FlatListPaginationExample />;
SimplePagination.storyName = 'Basic Pagination'

export const AdvancedPagination = ()=> <AdvancedFlatListPaginationExample />;
AdvancedFlatListPaginationExample.storyName = 'Advanced Pagination'
