export {}

class VisaCard {
  constructor(readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('fff')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'ttt'
