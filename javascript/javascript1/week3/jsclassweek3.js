const array = [1, 2, 3, 4, 5,]

array.push (6);
array.unshift (0);

console.log(array);
console.log (array.length);

array.pop (6);
array.shift (0);
console.log(array);
console.log (array.length);

for (i = 0; i<array; i++) {
    console.log(array[i])
}

for (const element of array) {
    console.log(element);
}

console.log(array.toString());

console.log(array.join("-"));


console.log(array.includes(10))



const classArray = ["qais", "ali", "vahab", "emilie",]


const myClass = [ { 
    firstName: "qias",
    age: 28,
    nationality: "jordanian" },
    
    {firstName: "ali",
    age: 30,
    nationality: "american",},

    {firstName: "vahab",
    age: 35,
    nationality: "iranian",},

    {firstName: "emilie",
    age: 33,
    nationality: "danish,"
    },
]




for (const name in myClass) {
    if (myClass[name].firstName === "ali") {console.log("Ali is here")}

    else {console.log("Ali is not here")}
}