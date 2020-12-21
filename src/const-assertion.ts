export {}

let name = 'fu'
name = 'ta'
console.log(name)

let nickname = 'fff' as const
nickname = 'fff'

const nickname2 = 'fff'
// nickname2 = 'ttt'

let profile = {
  name: 'f',
  height: 190,
} as const

// profile.name = 't'
// profile.height = 150
console.log({profile})
