const apiKey = "DZ3Hgpm4lRE0qXeoYOxo5g85EBQ7cQgX";
const url= "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
const textInput = document.getElementById("textInput")
const numberInput = document.getElementById("numberInput")
const searchBtn = document.getElementById("searchBtn")
const imageList = document.getElementById("imageList")

searchBtn.addEventListener("click", giphyResult)



function giphySearch(keyWord, gifNumber) {
   let gifArray = new Array();
   fetch(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${apiKey}&limit=${gifNumber}`)
   .then(response => response.json())
   .then(JsonObject => {
       JsonObject.data.forEach(element => {
          gifArray.push(element.images.downsized.url)
          console.log(element.images.downsized.url)
       })
       console.log(gifArray)
       htmlRender(gifArray)
      });
      return gifArray;
}

function giphyResult () {
   let keyWord = textInput.value 
   let gifNumber = numberInput.value 
   let gifArray = giphySearch (keyWord, gifNumber)
   //htmlRender (gifArray)
}

function htmlRender (gifArray) {
   console.log(gifArray.length);
   imageList.innerHTML = "";
for (const gif in gifArray) {
   console.log(gif);
const gifListItem = document.createElement('li')
const gifImageUrl = document.createElement("img")
gifImageUrl.setAttribute("src", gifArray[gif]) 
gifListItem.appendChild(gifImageUrl)
imageList.appendChild(gifListItem)
}
    
}



   let keyWord = textInput.value 
   let gifNumber = numberInput.value 

   /*if (keyWord == "") {
      alert ("Search bar is empty!")
   } 
      */  