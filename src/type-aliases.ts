export {}

type Mojiretsu = string

const fooString: string = 'Hello'
const fooMojiretsu: Mojiretsu = 'Hello'

const example = {
  name: 'f',
  age: 22,
  address: 'aaaa',
}

type Profile = {
  name: string
  age: number
}

const example2: Profile = {
  name: 't',
  age: 33,
}

type Profile2 = typeof example
