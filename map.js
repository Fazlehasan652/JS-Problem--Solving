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

// MAP
// Get an array of all names
let name = characters.map(el=> el.name
    )
console.log(name)

// Get an array of all heights
let height = characters.map(el=> el.height
)
console.log(height)

// Get an array of objects with just name and height properties
let nameHeight = characters.map(el=> {
    let data = `Name: ${el.name} height is ${el.height}`
    return data
}
)
console.log(nameHeight)

// Get an array of all first names
let fName = characters.map(el=> el.name.split(' ')[0]
)
console.log(fName)