const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// REDUCE
//Q-01.Get the total mass of all characters
let totalMass = characters.reduce((total, el) => {
  // console.log(typeof parseInt(el.mass))
  return total + parseInt(el.mass);

  // return total + Number(el.mass)
}, 0);
console.log(totalMass);

//Q-02 Get the total height of all characters
let totalHeight = characters.reduce((total, el) => {
  // console.log(typeof parseInt(el.height))
  return total + parseInt(el.height);

  // return total + Number(el.height)
}, 0);
console.log(totalHeight);

//Q-03 Get the total number of characters in all the character names
let totalNameChar = characters.reduce((total, el) => {
  // console.log(el.name.length)
  return total + el.name.length;

  // return total + Number(el.height)
}, 0);
console.log(totalNameChar);

//Q-04 Get the total number of characters by eye color (hint. a map of eye color to count)

let totalEyeColor = characters.reduce((total, el) => {
  if (total[el.eye_color]) {
    console.log();
    console.log("......................If......................");
    console.log(`if Block Befor init value 1 =  ${total[el.eye_color]}`);

    total[el.eye_color]++;

    console.log(`if Block After init value 1 =  ${total[el.eye_color]}`);
  } else {
    console.log();
    console.log(".....................Else.......................");
    console.log(`else Block Befor init value 1 =  ${total[el.eye_color]}`);

    total[el.eye_color] = 1;

    console.log(`else Block After init value 1 =  ${total[el.eye_color]}`);
  }
  return total;
}, {});
console.log();
console.log("..................Result..........................");
console.log(totalEyeColor);

// Other Option the Problem Solve by map Method use
let count = {};
let countEyeColor = characters.map((el) => {
  console.log(el.eye_color);
  if (count[el.eye_color]) {
    count[el.eye_color]++;
  } else {
    count[el.eye_color] = 1;
  }
});

console.log(count);
console.log(".....................................")

// Other Option the Problem Solve by For loop use
console.log()
console.log("...........For loop use .................")
let countNumber = {};



let eyes = []

for(let i = 0; i < characters.length; i++){
    eyes = eyes + " " + characters[i].eye_color
    // console.log(eye)
    // console.log(eye.split(" "))
    
}
let x = eyes.trim(" ")
console.log(x)
console.log(eyes)
const eye = x.split(" ")
console.log(eye)

let num = []

for(let i = 0; i < eye.length; i++){
    if (num[eye[i]]) {
        num[eye[i]] ++
        
      } else {
        num[eye[i]] = 1;
      }
}

console.log(num)





// const fruit = ["klwefApple", "opkgMango"];
// const fruit1 = [10,20,30,40];
// let x = []
// x.push(fruit, fruit1, fruits)
// console.log(x)
// let j = x.join()
// console.log(j)
// console.log(j.split(","))
// let xx = x.flat()
// console.log(xx)
// console.log(typeof xx)