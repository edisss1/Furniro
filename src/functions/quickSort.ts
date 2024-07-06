// Products sorting func

export const quickSort = <T extends { name: string; price: number }>(
  array: T[],
  compareFn: (a: T, b: T) => number
): T[] => {
  if (array.length < 1) {
    return array
  }

  const pivot = array[array.length - 1]
  const left = []
  const right = []
  for (const element of array.slice(0, array.length - 1)) {
    if (compareFn(element, pivot) < 0) {
      left.push(element)
    } else {
      right.push(element)
    }
  }

  return [...quickSort(left, compareFn), pivot, ...quickSort(right, compareFn)]
}
