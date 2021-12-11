const head = document.getElementById("header")

head.innerHTML = "I am the header and I shall be JavaScript 2 week 3"


// 1- Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

let textCalled = function () {
    console.log("the text Called after 2.5");
}

setTimeout(textCalled, 2500);

// 2- Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.




function logOutString (stringToLog, delay) {
    setTimeout(() => {console.log(stringToLog)}, delay)
};

logOutString("This is a 5 seconds check", 5000)

// 3- Create a button in html. 
// When clicking this button, use the function you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is clicked.

const btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME"; 
btn.onclick = function logOutString (stringToLog, delay) {
    setTimeout(() => {console.log("Called after 5 seconds")}, 5000)
};
document.body.appendChild(btn);

// 4- Create two functions and assign them to two different variables. 
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

let earthLogger = function earth () {
    console.log("earth");
};

let saturnLogger = function saturn() {
    console.log("saturn");
}

function planetLogFunction (planet) {
    return planet
};

planetLogFunction(earthLogger())

// 5- Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

const btnTow = document.createElement("BUTTON");
btnTow.innerHTML = "Log location"; 
document.body.appendChild(btnTow);



  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  
  
  btnTow.onclick = navigator.geolocation.getCurrentPosition(success);
  document.body.appendChild(btnTow);
 
  // my google chrome doesn't want to show location although I gave access?!

  // 6- This will wait until I fix the browser location

  // 7- Create a function called runAfterDelay.
  // It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function.
  // Try and call this function with different delays and different callback functions.

  
  const test = function printText () {
      console.log("This text is printed with a 10 seconds delay");
  };

  
  
  function runAfterDelay (callback, delay) {
    setTimeout(test, [10000]);
  } 

  runAfterDelay(test, 10000)

  // Check if we have double clicked on the page.
  // A double click is defined by two clicks within 0.5 seconds. 
  // If a double click has been detected, log out the text: "double click!"


const btnThree = document.createElement("BUTTON");
btnThree.innerHTML = "Test your double click here"; 
document.body.appendChild(btnThree); 
btnThree.addEventListener("dblclick", function() {
    alert("double click!");
  });

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
// And vice versa.




// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const thisIsAnArrayOfObjects = [
    function printFrog () {
        console.log("This is a frog ");
    },
    function printDog () {
        console.log("This is a dog");
    },
    function printCat () {
        console.log("This is a cat");
    },
];

thisIsAnArrayOfObjects.forEach(function(func){
    func(); 
});

// Create a function as a const and try creating a function normally. Call both functions. 

const animalPrinter = () => {
    console.log("All animals are cool")
}

function anotherAnimalPrinter () {
    console.log("All animals are cool, some are dangerous")
}

animalPrinter();

anotherAnimalPrinter();

// Create an object that has a key whose value is a function. Try calling this function.

const thisObject = {
    
    namer : function () {
console.log("Qais");
    },
    
}

thisObject.namer()




