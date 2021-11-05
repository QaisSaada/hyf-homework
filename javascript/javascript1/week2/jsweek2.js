// Flight booking fullname function

function getFullName(firstname, surname, useFormalName = true) {
    if (useFormalName) {
        return "Lord " + firstname + surname
     }
     else {
         return firstname + surname
     }
  }


  const fullName1 = getFullName ("Tom ","Cruise")
  const fullName2 = getFullName ("Maya ","Diab")

  console.log (fullName1)

  // for female/male names I would add a new boolean to the function. 


  // Event application

  const listOfDays = ["sunday", "monday", "tusday", "wednsday", "thursday", "Friday", "Saterday"]

  function getEventWeekday (days) {
      const Event = new Date ();
      Event.setDate (Event.getDate() + days);
      console.log (listOfDays[Event.getDay()])
  }

  getEventWeekday (2) 
  getEventWeekday (4) 

  // Weather 

  function pickClothes(temp) {
      if (temp > 20) {
          return "You should wear short, t-shirt and flipflops"
      }
      else if (temp < 20 && temp > 14) { 
          return "You should wear shorts, t-shirt and sneakers"
      } 
      else if (temp < 15 && temp > 9) { 
          return "You should wear pants, a shirt and sneakers"
      }

      else if (temp < 10 && temp > 5) {
          return "You should wear winter jaket"
      }

      else if (temp <= 5) {
          return "Stay home!"
      }
  }

  const clothesToWear = pickClothes(5)
  console.log(clothesToWear)

  // The Queens class 

    const class07Students = [];
    
    function addStudentToClass(studentName) {
        if (class07Students.length < 6) {
            class07Students.push(studentName);
        }
         else if (class07Students.length >= 6) {
            console.log("Class 07 is full") 
        }

        else if (class07Students.length >= 6 && studentName === "Queen") {
            class07Students.push("Queen");
        }

        else if (class07Students.includes(studentName)) {
            console.log("Student " + studentName + " is already in class 07") 
        }
    }

    addStudentToClass("qais")
    addStudentToClass("Ali")
    addStudentToClass("Amal")
    addStudentToClass("Omar")
    addStudentToClass("Yasmena")
    addStudentToClass("Emilie")
    

    console.log(class07Students)
    

    
  
  

