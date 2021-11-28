// Problem solving cardio

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];


function findShorty() {
    let shortestWord = danishWords[0]
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortestWord.length) {
            shortestWord = danishWords[i]
        }
    }
    return shortestWord
}

console.log (findShorty(danishWords));

// Find and count the Danish letters


const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";


function findDanishLetter(str, letter,) 
{
 var letterCount = 0;
 for (let i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}

console.log(findDanishLetter(danishString2, "å"))

// Spirit animal name generator

const animalArray = ["The Crazy Wolf", "The Mad Cow's cousin", "The Smoking Lion", "The Pharo Cat", "The Teaching Raccon", "The Wise Horse", "The Shamfull Dog", "The Mousy Turtle"]



function getInputValue(){
const inputVal = document.getElementById("nameInput").value;

document.getElementById("btn").addEventListener("click", function() {
document.getElementById("para").innerHTML = inputVal + " - " + animalArray[Math.floor(Math.random()*animalArray.length)];
});

if (inputVal == "") {
    document.getElementById("para").innerHTML = "You have to write your name, its kinda the idea behind this whole thing god damn it!";
  }
}

function newInputValue(){
    const inputVal = document.getElementById("nameInput").value;
    
    document.getElementById("newBtn").addEventListener("click", function() {
    document.getElementById("para2").innerHTML = inputVal + " - " + animalArray[Math.floor(Math.random()*animalArray.length)];
    });
    }


    console.log("Qais");