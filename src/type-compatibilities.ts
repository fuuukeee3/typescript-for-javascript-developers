export {}

let fooCompatible: any
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible)
console.log(typeof barCompatible)

fooCompatible = barCompatible

console.log(typeof fooCompatible)
console.log(typeof barCompatible)

console.log('-----')

let fooImcompatible: string
let barImcompatible: number = 1

// fooImcompatible = barImcompatible

let fooString: string
let barString: string = 'str'

fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

let fooNumber: number
let fooNumberLiteral: 199 = 199
fooNumber = fooNumberLiteral


interface Animal {
  age: number
  name: string
}

class Person {
  constructor(public age: number, public name: string) {
  }
}

let me: Animal
me = new Person(24, 'fff')
console.log(me)
