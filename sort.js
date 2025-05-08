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

// SORT
// Sort by name
let nameChar = characters.sort((a, b) => {
  if (a.name < b.name) {
    let Name_A = "Name A = " + a.name + " is = " + a.name.length;
    console.log(a.name.length < b.name.length);
    console.log(Name_A);
    let Name_B = "Name B = " + b.name + " is = " + b.name.length;
    console.log(Name_B);

    // console.log(b.name.length)
    // console.log(a.name.length)
    // let manus = a.name < b.name
    // console.log(manus)
    // console.log(b)
    return -1;
  }
  if (a.name > b.name) {
    let Name_A = "Name A = " + a.name + " is = " + a.name.length;
    console.log(a.name.length < b.name.length);
    console.log(Name_A);
    let Name_B = "Name B = " + b.name + " is = " + b.name.length;
    console.log(Name_B);
    return 1;
  }
  let Name_A = "Name A = " + a.name + " is = " + a.name.length;
  console.log(a.name.length == b.name.length);
  console.log(Name_A);
  let Name_B = "Name B = " + b.name + " is = " + b.name.length;
  console.log(Name_B);
  return 0;
});
console.log(nameChar)

// Sort by mass

let massChar = characters.sort((a, b) => {
  console.log(`A Mass value = ${a.mass}`);
  console.log(`B Mass value = ${b.mass}`);
  console.log(`Return mass value = ` + (a.mass - b.mass));

  return a.mass - b.mass;

//   return b.mass - a.mass;


});
console.log(massChar);

// Sort by height
let heightChar = characters.sort((a, b) => {
    console.log(`A Height value = ${a.height}`);
    console.log(`B Height value = ${b.height}`);
    console.log(`Return Height value = ` + (a.height - b.height));
  
    // return a.height - b.height;

    return b.height - a.height;
  
    
  });
  console.log(heightChar);

// Sort by gender
let genderChar = characters.sort((a,b)=>{
    if(a.gender == "male"){
        return -1
    }
    if(a.gender == "female"){
        return 1
    } else{
        return 0
    }
})
console.log(genderChar)