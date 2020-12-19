export {}

namespace Japanese {
  export class Person {
    constructor(public name: string) {
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public middleName: string, public lastName: string) {
    }
  }
}

const me = new Japanese.Person('fu')
console.log(me.name)

const you = new English.Person('goro', 'michel', 'tanabe')
console.log(you.middleName)
