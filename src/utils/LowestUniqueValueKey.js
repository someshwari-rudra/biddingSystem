export function findKeyByValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    let key = Object.keys(array[i])[0];
    if (array[i][key].includes(value)) {
      return key;
    }
  }
  return undefined;
}
