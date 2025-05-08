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


// SOME
// Is there at least one male character?
let isMale = characters.some(el=> el.gender == "male")
console.log(isMale)
// Is there at least one character with blue eyes?
let isBlueEye = characters.some(el=> el.eye_color == "blue")
console.log(isBlueEye)
// Is there at least one character taller than 200?
let shorter = characters.some(el=> el.height > 200)
console.log(shorter)
// Is there at least one character that has mass less than 50?
let massMore = characters.some(el=> el.mass < 50)
console.log(massMore)