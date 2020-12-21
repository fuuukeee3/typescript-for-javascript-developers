export {}

interface Profile {
  [index: string]: string | number | boolean;
  name: string;
  underTwenty: boolean;
}

let profile: Profile = {
  name: 'fu',
  underTwenty: false
}

profile.age = 32
profile.nationality = 'Japan'
