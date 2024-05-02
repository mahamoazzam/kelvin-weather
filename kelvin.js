// The value saved to kelvin will stay constant!
const kelvin = 293;

// To convert Kelvin to Celsius, you have to subtract the value from the kelvin by 273 because Celsius is 273 degrees less than Kelvin. Create a new celsius variable to store that new value. 
var celsius = kelvin - 273;
console.log(celsius);

// To then get the Farenheit value, you must have Celsius multiply into (9/5) and then add 32. That will give you the new value for Farenheit.
let farenheit = celsius * (9/5) + 32;
console.log(farenheit);

// When you convert from Celsius to Farenheit, you'll often end up getting a decimal number. In order to remedy that, you can use the Math.floor() method to round down the decimal number.
Math.floor(farenheit);
console.log(farenheit);

console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} scaled to Newton.`)
