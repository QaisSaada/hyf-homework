console.log("Art Project");
// canvas circul
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*context.beginPath();
context.fillStyle = 'blue';
context.strokeStyle = '#0077aa47';
context.lineWidth = 2;

context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fill();
context.stroke()*/

// circul class

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
      this.fillColor = fillColor;
    }
    draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle , this.fillColor);
    context.fill();
    context.stroke()
    }
    
  }

  const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#0000FF");
  const c2 = new Circle(100, 100, 40, 0, 2 * Math.PI, "#FF0000");
  const c3 = new Circle(200, 200, 60, 0, 2 * Math.PI, "#00FF00");

  c1.draw();
  c2.draw();
  c3.draw();

  //Now lets make art!

  function randomX() {
   return Math.floor(Math.random() * window.innerWidth)
  };

  function randomY() {
   return Math.floor(Math.random() * window.innerHeight)
  }

  function randomRadius() {
    return Math.floor(Math.random() * 100);
}

  function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  }
    
  function randomCirculs () {
      const c4 = new Circle(randomX(), randomY(), randomRadius(), 0, 2 * Math.PI, randomColor());
      c4.draw();
  }

  setInterval(randomCirculs(), 1000);

  var intervalID = setInterval(function randomCirculs () {
    const c4 = new Circle(randomX(), randomY(), randomRadius(), 0, 2 * Math.PI, randomColor());
    c4.draw();
}, 1000);

// working with promises 

const promise1 = fetch("https://api.github.com/search/repositories?q=user:mariem460")
.then(response => response.json())
.then(data => {console.log(data.items[1].owner.avatar_url);
    return data.items[1].owner.avatar_url
})

const promise2 = fetch("https://api.github.com/search/repositories?q=user:Sana-Shabeel")
.then(response => response.json())
.then(data => {console.log(data.items[1].owner.avatar_url);
    return data.items[1].owner.avatar_url
})

const promise3 = fetch("https://api.github.com/search/repositories?q=user:QaisSaada")
.then(response => response.json())
.then(data => {console.log(data.items[1].owner.avatar_url);
    return data.items[1].owner.avatar_url
})

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    const ul = document.createElement("ul");
    for (let i = 0; i < values.length; i++) {
        console.log(values[i])
        const li = document.createElement("li");
        li.innerHTML = values[i];
        ul.appendChild(li)
        document.getElementById("fetchRepo").appendChild(ul);
      }

  });

//Clases 

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
    return this.products.push(product)
    }
  
    removeProduct(product) {
    return this.products.pop(product)
    }
  
    searchProduct(productName) {
    return this.products.map(productName = product.name);
    }
  
    getTotal() {
    return this.products.map(product => product.price)
    .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    } , 0)
    }
  
    renderProducts() {
        const uList = document.createElement("ul");
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i])
            const li = document.createElement("li");
            li.innerHTML = this.products[i];
            uList.appendChild(li)
            document.getElementById("shopping").appendChild(uList);
          }
    }
  
    getUser(user) {
    const promise3 = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {console.log(data.name);
    return data.name
})
    }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  shoppingCart.addProduct(flatscreen);

  console.log(shoppingCart.getTotal());
