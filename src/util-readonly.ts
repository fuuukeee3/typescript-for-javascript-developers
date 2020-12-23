export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "fu",
  age: 31,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: "aa",
  age: 31,
};

// friend.age++
console.log(friend);
