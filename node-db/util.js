export async function sleep(baseTime = 2000, offset = 2000) {
  const time = baseTime + Math.random() * offset;
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}
// 数组排序
// key: arrayItem为对象，对象的key
// order:desc降序,asce升序
export function sortBy(array, key, order = "desc") {
  console.log(key, order);
  if (order === "desc") return array.sort((a, b) => b[key] - a[key]);
  if (order === "asce") return array.sort((a, b) => a[key] - b[key]);
  return [];
}
