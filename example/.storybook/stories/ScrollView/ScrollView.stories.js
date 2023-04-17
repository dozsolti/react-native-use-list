import React from 'react';
import { View } from 'react-native';
import { MyScrollView } from './ScrollView';

const MyScrollViewMeta = {
  title: 'MyScrollView',
  component: MyScrollView,
  argTypes: {
    onPress: { action: 'pressed the ScrollView' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyScrollViewMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};
