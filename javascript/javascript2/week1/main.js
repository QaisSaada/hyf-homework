console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("ul")


function renderProducts(products) {
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