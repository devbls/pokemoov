function sortTypes(list: { id: string; name: string }[], mainType: string) {
  const sortedArray = [
    ...list.filter((item) => item.name === mainType),
    ...list.filter((item) => item.name !== mainType),
  ];

  return sortedArray;
}

export { sortTypes };
