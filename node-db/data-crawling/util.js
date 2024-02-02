export async function sleep(baseTime = 2000, offset = 2000) {
  const time = baseTime + Math.random() * offset;
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}
