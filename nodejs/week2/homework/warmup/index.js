const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) =>{
    const {firstNumber, secondNumber} = req.query;
    res.send(`${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`);
    }
    );

    app.get("/numbers/multiply", (req, res) =>{
        const {firstNumber, secondNumber} = req.query;
        res.send(`${firstNumber} * ${secondNumber} = ${Number(firstNumber) * Number(secondNumber)}`);
        }
        );

    


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));



function addNumbers(num1, num2) {
    const addedNums = num1 + num2;
    console.log(addedNums);
}

console.log(addNumbers(2, 3));