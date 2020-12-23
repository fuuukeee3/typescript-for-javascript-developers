export {}

type DetailProfile = {
  name: string
  height: number
  weight: number
}

type SimpleProfile = Pick<DetailProfile, 'name' | 'height'>
type SimpleProfile2 = Omit<DetailProfile, 'name' | 'weight'>
