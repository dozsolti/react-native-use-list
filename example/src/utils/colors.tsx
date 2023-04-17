export const generateRandomColor = (count: number = 10) => {
  return Array.from(
    { length: count },
    () => '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
  );
};
