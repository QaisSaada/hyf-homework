
    function fizzBuzz(p1, p2 ) {
    for (let i =0; i <= 100; i++) {
    if (( i % p1 ===0) && (i % p2 ===0)) {
        console.log("FizzBuzz");
    }
    else if ( i % p2 === 0 ){
        console.log("Buzz");
    }
    else if ( i % p1 === 0 ){
        console.log("Fuzz");
    }
    else {
        console.log(i)
    }
    }}

    fizzBuzz(4, 12);



// SA

/*const happyWords = ["happy", "cool", "nice", "sweet", "drip", ]

const sadWords = ["sad", "shit", "bad", "boring", "kitsch", ]

function getSentimentScore (para) {
    for (i=0; i < happyWords.length; i++) {
        if (i === happyWords[i]) {
            return 
        }

    }


}

//const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

//console.log(sentimentScoreObject); */

// Fav Band

const band = {
    name: "Mashrou3 Laila",
    nationality: "Lebanes",
    genre: "electro rock",
    split: false,
    albums: [
        {
            albumName: "ra'set Laila",
            released: 2017          
        },
        {albumName: "jin",
        released: "2019",

        },
    
    ]

}

bandInfo = `The ${ band.nationality } ${ band.genre } band ${ band.name }. Their first album, ${ band.albums[0].albumName }, was released in ${ band.albums[0].released }.`;

console.log(bandInfo)

// loop over claasmates Array 

/*const classMates = [
    "Ahmad", "Sara", "Amal", "Khaled", "Abeer","Samy",
]

function findClassMembers (para){
    para.forEach(name) =>  {
        if (name.startsWith ("A")) {
            console.log("my name starts with A")
        };
        else (console.log("no"))
    };

};

namesWithA = findClassMembers

console.log(namesWithA)*/

// Voice assistant

// First I want to make a function that saves the name and then returnes "hi name, nice to meet you" 

const name = []
const todo = []
const operators = ["+", "-", "*", "%",]

function getReply(command) {
    if (command.includes("Hello my name is")) {
        const splitToFindName = command.split(4);
        const savedName = splitToFindName;
        name.push (savedName)
        console.log("Hi " + savedName + " welcome to voice assistant")
    }
    if (command.includes("What is my name") && name.length > 0) {
        console.log(name[0])
    } 
    else if (command.includes( "Hello my name is") && name.length < 1) {
        console.log("You are not registered yet")
    }

    // I used the simple .push and .shift as a solution to this

    if (command.includes( "add to my todo")) {
        const splitToFindTodo = command.split(1);
        const savedTodo = splitToFindTodo;
        todo.push(savedTodo);
        console.log(savedTodo + " added to your todo")
    }
    if (command.includes( "Remove from my todo")) {
        const splitToFindTodo = command.split(1);
        const removeTodo = splitToRemoveTodo;
        todo.shift(removeTodo);
        console.log(removeTodo + " added to your todo")
    }

    // .length to show how many activities and and a simple call to show the values 
    if (command.includes("What is on my todo?")) {
        console.log("You have " + todo.length + " activities on your list and they are " + todo);
    }
    if (command.includes("What day is it today?")) {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        console.log("today is " + date)
    }
    

    // from here I strted heavy googling. I'n not sure if this the correct way of doing a simple math function 
        const splitCommand = command.split(" "); 
        splitCommand.forEach((word, index) => {
    if (typeof parseInt(word) == 'number' && operators.includes(splitCommand[index+1])) {
        console.log(eval(command))
    }
})
}

// timer is not working for me :( 

    if (command.includes('timer' && typeof == Number)){           
     const timerNumber = Number
     console.log("Timer set for " + Number +  "minutes")

     function setTimer(){
         console.log('Timer done')
    }
     setTimeout(setTimer, ???,  );

}





