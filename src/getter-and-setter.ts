export {}

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner() {
    return this._owner
  }

  set secretNumber(val: number) {
    this._secretNumber = val
  }

  debugP(): void {
    console.log(this._secretNumber)
  }
}

const card = new MyNumberCard('f', 1234)
// card.owner = 'aiueo'
card.debugP()
card.secretNumber = 4321
card.debugP()

console.log(card.owner)
// console.log(card.secretNumber)
