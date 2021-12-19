export const randomArrayPicker =
  <T>(array: Array<T>) =>
  () =>
    array[Math.floor(Math.random() * array.length)];
