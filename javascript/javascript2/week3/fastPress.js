// The fastest presser in this realm

// 1- Create an input and a button in html. When the button is clicked, get the value of the input.
// This value will be the amount of time the game should run.


// 2- Set a timeout for the time specified by the user. After that time has run out just log out a simple string.



const btn = document.getElementById('btn');
const rebtn = document.getElementById('re-btn');



  
/*btn.addEventListener('click', (e) => {
let theValue = document.getElementById('timeInput').value;
let numValue = parseInt(theValue, 10) * 1000
setTimeout(function(numValue){ console.log("Time is up"); }, numValue);

});*/


// 3- Create an event listener so you can call a function when any key is pressed.
// Now grap the actual key that was pressed. Fx was it a j or an i. We are interested in s and l.


let scounter = document.querySelector(".scounter")
let lcounter = document.querySelector(".lcounter")


let countingTheS = 0
let countingTheL = 0
const sArray = [];
const lArray = [];




function countingEvent (counting) {
    if (counting.key ==="s") {
    scounter.innerHTML = countingTheS++;
    sArray.push(countingTheS);
    } 
    if (counting.key ==="l") {
        lcounter.innerHTML = countingTheL++;
        lArray.push(countingTheL)
}
}



//document.addEventListener('keydown', countingEvent);


// Now put it all together! After the timeout is done figure out which of the counters is largest.
// Give some kind of feedback to the users indicating who won.



function mainEvent(delay) {
    document.addEventListener("keydown", countingEvent);
    setTimeout(() => {
      document.removeEventListener("keydown", countingEvent);
      //console.log("event being removed");
      if (sArray[sArray.length -1] > lArray[lArray.length -1]) {
        scounter.innerHTML ="You win babe!";
      } else if 
      (sArray[sArray.length -1] < lArray[lArray.length -1]) {
        lcounter.innerHTML = "You win babe!";
      } else if 
      (sArray[sArray.length -1] == lArray[lArray.length -1]) {
        scounter.innerHTML = "no winner";
        lcounter.innerHTML = "no winner"
      }
    }, delay);
  }


  btn.addEventListener("click", (e) => {
  let theValue = document.getElementById('timeInput').value;
  let numValue = parseInt(theValue, 10) * 1000
   mainEvent(numValue)
  });

  //rebtn.addEventListener("click", document.location.reload()) 

  function refreshPage(){
    window.location.reload();
} 

