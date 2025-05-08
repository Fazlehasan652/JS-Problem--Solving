const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// FILTER
// Get characters with mass greater than 100
let massChar = characters.filter(el=>{
    // console.log(el)
    return el.mass > 100
})
console.log(massChar)
// Get characters with height less than 200
let heightChar = characters.filter(el=>{
    // console.log(el)
    return el.height< 200
})
console.log(heightChar)
// Get all male characters
let maleChar = characters.filter(el=>{
    // console.log(el)
    return el.gender == "male"
})
console.log(maleChar)
// Get all female characters
let femaleChar = characters.filter(el=>{
    // console.log(el)
    return el.gender == "female"
})
console.log(femaleChar)