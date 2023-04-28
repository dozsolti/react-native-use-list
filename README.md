![Alt text](./banner.jpg)

<div align="center">

![Expo supported](https://img.shields.io/badge/Expo-supported-brightgreen?style=flat-square)
![npm](https://img.shields.io/npm/dm/react-native-use-list?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/dozsolti/react-native-use-list?color=red&style=flat-square)
![npm](https://img.shields.io/npm/l/react-native-use-list?style=flat-square)

</div>

## Features

- :open_book: Pagination
  - Navigate to next or previous page.
  - Go to a specific page (via index).
  - Page looping
  - Item alignment
- :repeat: Pull to Refresh
  - isRefreshing state
- :bulb: _Open for more. Request a feature in the issues tab._

## Supported components

- FlatList
- VirtualizedList
- SectionList

## Installation

Using npm:

```sh
npm install --save react-native-use-list
```

Using yarn:

```sh
yarn add react-native-use-list
```

## Quickstart - Pagination

```js
import { useList } from 'react-native-use-list';


const ref = useRef(null);

const { pageIndex, nextPage, prevPage, indexController } = useList({ ref });

return (
  <>
    <FlatList
      ...
      ref={ref} // <---
      {...indexController} // <---
    />
    <View style={styles.footer}>
      <Button text="<" onPress={prevPage} />
      <Text style={styles.footerIndex}>{pageIndex}</Text>
      <Button text=">" onPress={nextPage} />
    </View>
  </>
);
```

## Quickstart - Pull to refresh

```js
import { useList } from 'react-native-use-list';


const [data, setData] = useState([...]);

const updateData = async () => {
  ...
  setData([...])
}

const { isRefreshing, refreshController } = useList({
  onRefresh: updateData // <---
});

return (
  <>
    <Text>isRefreshing: {isRefreshing}</Text>
    <FlatList
      data={data}
      ...
      {...refreshController} // <---
    />
  </>
);
```

## Folders

```
/example/examples
    /Flatlist
      Pagination.tsx
      AdvancedPagination.tsx
      PullToRefresh.tsx
    /VirtualizedList
      Pagination.tsx
      PullToRefresh.tsx
    /SectionList
      Pagination.tsx
      PullToRefresh.tsx

/example/templates (coming soon)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
