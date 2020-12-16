export {}

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const pitcher: Pitcher1 = {
  throwingSpeed: 154
}

const batter: Batter1 = {
  battingAverage: 0.367
}

// type TwoMayPlayer = {
//   throwingSpeed: number
//   battingAverage: number
// }

type TwoMayPlayer = Pitcher1 & Batter1

const twoMay: TwoMayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
