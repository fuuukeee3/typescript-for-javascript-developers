export {}

// tuple型は型推論ではうまく判定できない
let profile: [string, number] = ["f", 35]
profile = ['s', 24]
