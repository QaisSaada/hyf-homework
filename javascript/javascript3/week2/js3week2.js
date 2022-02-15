// Movies exercise

const badAndOld = fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((response) => response.json())
    .then(data => { 
        data
        .filter(movie => movie.rating <= 5)
        .filter(movie => movie.year >= 2000);
      console.log(data);
    })
    .catch((error) => console.log(error));
    console.log(badAndOld);

    // Promise that resolves after set time

      

    function newFunc(resolveAfter) {
        return new Promise(resolve => setTimeout(resolve, resolveAfter));
    }

      newFunc(5000).then(() => console.log("Done"));

    async  function newFunc(resolveAfter) {
        await new Promise(resolve => setTimeout(resolve, resolveAfter));
    }

      newFunc(5000).then(() => console.log("Done"));

     //Rewrite time

    function getCurrentLocation() {
        return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        });
    }

     getCurrentLocation()
    .then((position) => {
    console.log(position);
    })
    .catch((error) => {
    console.log(error);
    });

    
    
    function timer() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000)
            // can i do this timeout or do i have to write an actuall number?
        })
    };

    timer(3000).then(() => {
        console.log("Called after 3 seconds");
      });

    timer(3000).then(() => {
        console.log("Called after 3 seconds");
      });

    
// Fetching and waiting

function promiseFunc() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
            ))
        }, 3000);
    })
};

promiseFunc()
.then((response) => response.json())
.then(data => { console.log(data) 
});




function timerThreeSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  
  async function asyncFunc() {
    console.log('prossesing');
    const result = await timerThreeSeconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncFunc();

  // Visual promise

  