export {}

type Profile = {
  name: string
  age: number
  zipCode: number
}

// 既存の型をオプショナルな型に変換してくれる
type PartialType = Partial<Profile>

type Profile2 = {
  name: string
  age?: number
  zipCode: number
}

// 既存の型を必須な型に変換してくれる
type RequiredType = Required<Profile2>
