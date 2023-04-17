  const scrollTop =
    (listRef.current as any)
      ?.getScrollResponder()
      .scrollResponderGetScrollableNode().scrollTop || 0;

  const height =
    (listRef.current as any)
      ?.getScrollResponder()
      .scrollResponderGetScrollableNode().scrollHeight || 0;

  const dataCount = listRef.current?.props.data?.length || 0; // check on other lists
