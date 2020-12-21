export {}

let name: any = 'fu'

// let length = name.length as number
// let length = (name as string).length
let length = (<string>name).length

console.log(typeof length)
