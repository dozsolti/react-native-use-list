import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

export const MyScrollView = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;
    const currentPage = Math.floor(offsetX / pageWidth);
    setCurrentPageIndex(currentPage);
  };

  return (
    <ScrollView horizontal pagingEnabled onScroll={handleScroll} onMomentumScrollEnd={handleScroll}>
      <View style={{ width: 300, backgroundColor: 'red' }}>
        <Text>Page 1</Text>
      </View>
      <View style={{ width: 300, backgroundColor: 'blue' }}>
        <Text>Page 2</Text>
      </View>
      <View style={{ width: 300, backgroundColor: 'green' }}>
        <Text>Page 3</Text>
      </View>
    </ScrollView>
  );
};
