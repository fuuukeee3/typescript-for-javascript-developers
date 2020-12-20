export {}

class Maho {}
class Soryo {}

class Taro extends Maho {

}

interface Kenja {
  ionazun(): void
}
interface Senshi {
  kougeki(): void
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("イオナズン")
  }

  kougeki(): void {
    console.log("攻撃")
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()
