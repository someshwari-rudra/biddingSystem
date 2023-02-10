export function lowestUniqueValue(arrayOfObjects) {
  let allValues = [];
  for (let obj of arrayOfObjects) {
    for (let key in obj) {
      allValues = allValues.concat(obj[key]);
    }
  }

  let map = new Map();
  for (let i = 0; i < allValues.length; i++) {
    if (map.has(allValues[i])) {
      map.set(allValues[i], map.get(allValues[i]) + 1);
    } else {
      map.set(allValues[i], 1);
    }
  }
  allValues = [...new Set(allValues)].sort((a, b) => a - b);
  for (let i = 0; i < allValues.length; i++) {
    if (map.get(allValues[i]) === 1) {
      return allValues[i];
    }
  }
  return 0;
}
