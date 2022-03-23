const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

app.get("/calculator/add", (req, res) =>{
    const {firstNumber, secondNumber} = req.query;
    res.send(`${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`);
    }
    );

    app.get("/calculator/multiply", (req, res) =>{
        const firstNumber = req.query.firstNumber;
        const secondNumber = req.query.secondNumber;
        res.send(`${Number(firstNumber) * Number(secondNumber)}`);
        }
        );

    app.get("/calculator/divide", (req, res) =>{
        const firstNumber = req.query.firstNumber;
        const secondNumber = req.query.secondNumber;
        res.send(`${Number(firstNumber) / Number(secondNumber)}`);
         }
        );

    app.get("/calculator/subtract", (req, res) =>{
        const firstNumber = req.query.firstNumber;
        const secondNumber = req.query.secondNumber;
        res.send(`${Number(firstNumber) / Number(secondNumber)}`);
        }
        );

