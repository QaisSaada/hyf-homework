// Name removale 

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";

  console.log(names.indexOf("Ahmad"));

  names.splice(1, 1);

  console.log(names);

  // When will we be there??



  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  const speedValue = travelInformation.speed 
  const destinationDistanceValue = travelInformation.destinationDistance 




function convertHours(hours) {
    const remainder = hours % 1;

    const minutes = remainder * 60 

    const wholeHours = hours - remainder

    return (wholeHours + " hours and " + Math.round(minutes) + " minutes")
}  
function timeNeeded(km, kmh,)  {
    return convertHours(km / kmh ) 
};

const travelTime = timeNeeded (destinationDistanceValue, speedValue);

console.log(travelTime)


/* This is another solution that I have abandoned.
    function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(travelTime + "Hours"));*/



    // Series duration of my life

    

      let totalDuration = 0;
      const seriesDurations = [
        {
          title: 'Game of thrones',
          days: 3,
          hours: 1,
          minutes: 0
        },
        {
          title: 'Sopranos',
          days: 3,
          hours: 14,
          minutes: 0
        },
        {
          title: 'The Wire',
          days: 2,
          hours: 12,
          minutes: 0
        }
      ];

      


    function logOutSeriesText(seriesDurations) {
        seriesDurations.forEach((series) => {
            console.log(series.title);
            console.log(series.days);
            console.log(series.hours / 24);
    
            totalDuration = totalDuration + series.days + series.hours / 24;
        });
        const lifeWasted =  totalDuration / (80*365) 
        console.log(`In total, TV have costed me ${lifeWasted*100}% of my life`);
     }
    
    logOutSeriesText(seriesDurations);


      // NOnoN0nOYes (Note taking app)

      const notes = [
          
      ];

    function saveNote(content, id) {
        const obj = {
            content: content, 
            id: id
          }  
        notes.push(obj)
      }
      
      saveNote("Pick up groceries", 1);
      saveNote("Do laundry", 2);

      console.log(notes);

    function getNote(id) {
        
        let correctNote = 0
        notes.forEach((note) => {       
        if (note.id === id){
            correctNote = note
        }      
          });
          if (correctNote === 0) {
              console.log ("error");
          }
          return correctNote
      }

      
      const firstNote = getNote(3);
      console.log(firstNote);



      function logOutNotesFormatted() {
        notes.forEach((note) => {
            console.log("The note with id: " + note.id  + " has the following note text: " + note.content)
        });                   
      }


      
    

    
        

    