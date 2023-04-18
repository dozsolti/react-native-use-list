import React, { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import type { Options } from './types';

export function usePullToRefresh({ onRefresh, debugMode }: Options) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const _onRefresh = useCallback(async () => {
    if (!onRefresh) {
      if (debugMode)
        console.warn('onRefresh function is missing from the options.');
      return;
    }
    setIsRefreshing(true);
    await onRefresh();
    setIsRefreshing(false);
  }, [debugMode, onRefresh]);

  const refreshController = {
    refreshControl: (
      <RefreshControl refreshing={isRefreshing} onRefresh={_onRefresh} />
    ),
  };
  return {
    isRefreshing,
    refreshController,
  };
}
