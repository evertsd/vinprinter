export default function immutableUpdate(array, objectIndex, objectUpdates) {
  return array.map((item, index) => {
    if(index !== objectIndex) return item;

    return {
      ...item,
      ...objectUpdates
    }
  })
}
