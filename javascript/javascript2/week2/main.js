console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("ul")
const searchBar = document.querySelector("#search-Bar")
const maxBar = document.querySelector("#max-Bar")


const logKey = ((e) => {
  const filteredProducts = products.filter(product => {
    //console.log("max-bar:" + maxBar.value + "search-bar: " + searchBar.value + "product name: " + product.name + " product price: " + product.price) 

    let maxPrice = Infinity

    if (maxBar.value === "") {
      const maxPrice = Infinity
    } else
     {
      maxPrice = maxBar.value 
    }

    if (product.name.toUpperCase().indexOf(searchBar.value.toUpperCase()) !== -1 && product.price <=  maxPrice) {
      return true
    } else {
      return false
    }
    
  });

renderProducts(filteredProducts);
console.log(filteredProducts)
})



searchBar.addEventListener('keyup', logKey);

maxBar.addEventListener('keyup', logKey);

//onsole.log("max-bar:" + maxBar.value + "search-bar: " + searchBar.value + "product name: " + product.name + " product price: " + product.price) 








function renderProducts(products) {
 // delete elements 
  productsUl.innerHTML = ""
  for (let i = 0; i < products.length; i++) {
  const header = document.createElement('h1')
  const pricePara = document.createElement('li')
  const ratingPara = document.createElement('li')
  header.innerHTML = products[i].name
  pricePara.innerHTML = `Price: ${products[i].price}` 
  ratingPara.innerHTML = `Rating: ${products[i].rating}`
  

  productsUl.appendChild(header)
  header.appendChild(pricePara)
  header.appendChild(ratingPara)

  ratingPara.style.fontSize = "smaller"; 
  pricePara.style.fontSize = "smaller";

}
}

renderProducts(products);

console.log(products)

