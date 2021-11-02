// My FreeCodeCamp profile is: @qais-saada


// Age-ify (A future age calculator)


const yearOfBirth = 1993;
const yearFutur = 2027;

const age = yearFutur - yearOfBirth;

console.log("You will be " + age + " " + "years old in " + yearFutur);


// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth =  2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) { 
console.log ("Your dog will be " + dogYear + " dog years old in 2027");
}
else {
    console.log ("Your dog will be " + dogYearFuture - dogYearOfBirth  + " human years old in 2027")
}


// Housey pricey (A house price estimator)

// Peters hous:

const volumeInMeters = 8 * 10 * 10;
const gardenSizeInM2 = 100;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseCost = 2500000
                   

if (housePrice>houseCost) {
    console.log ("This house is " + (housePrice - houseCost) + "underpriced")
}
else {
    console.log ("This house is " + (houseCost - housePrice) + " overpriced")
}

// Julias hous:

const volumeInMeters2 = 5 * 11 * 8;
const gardenSizeInM22 = 70;
const housePrice2 = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseCost2 = 1000000
                   

if (housePrice>houseCost) {
    console.log ("This house is " + (housePrice2 - houseCost2) + " underpriced")
}
else {
    console.log ("This house is " + (housePrice2 - houseCost2) + " overpriced")
}

// Ez Namey (Startup name generator) Optional

const firstWords = ["Cool ", "Calculated ", "Poor ", "Sexy ", "Mother of ", "Shame of ", "Amazing ", "Solary ", "First ", "The "]
const secondWord = ["Slugfest", "Chaos", "Rich", "Success", "Companies", "Corporate", "Steel", "Factory", "Shop", "Startup"]

const randomNumber = Math.floor(Math.random() * 10);


const startupName = firstWords [randomNumber] + secondWord [randomNumber]

console.log ( `The startup: ${startupName} contains ${startupName.length} characters` )





