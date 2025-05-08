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



// EVERY
// Does every character have blue eyes?
let isBlueEye = characters.every(el=> el.eye_color == "blue")
console.log(isBlueEye)
// Does every character have mass more than 40?
let massMore = characters.every(el=> el.mass > 40)
console.log(massMore)
// Is every character shorter than 200?
let shorter = characters.every(el=> el.height < 200)
console.log(shorter)
// Is every character male?
let isMale = characters.every(el=> el.gender == "male")
console.log(isMale)

