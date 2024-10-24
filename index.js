
// Task - 1 
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// Task -2

const person = { name: "Alice", age:25, city: "wonderland"};
const {name, age, city} = person;
console.log(name);
console.log(age);
console.log(city);


// Task - 3


const settings = { theme: 'dark', language: 'en' };
const { theme = 'light', language = 'en', mode = 'light' } = settings;
console.log(theme); 
console.log(language);
console.log(mode); 
