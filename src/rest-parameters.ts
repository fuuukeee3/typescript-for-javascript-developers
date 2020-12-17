export {}

const sum = (...values: number[]): number => {
  return values.reduce((accum, current) => {
    return accum + current
  })
}

console.log(sum(6, 2, 3, 4, 5))

