console.log("inside warmup file");

class Circle {
    constructor(radius) {
      this.radius = radius;
      
    }
    
    get Diameter() {
      return this.calcDiameter();
    }
    
    calcDiameter() {
      return this.radius * 2;
    }
  

    get Circumference() {
      return this.calcCircumference();
  }
  
    calcCircumference() {
        return ((2) * (Math.PI) * (this.radius));
    }

    get Area() {
        return this.calcArea();
    }
    
      calcArea() {
        return Math.PI * this.radius * this.radius;
    }
    // This math looks so wrong! I will study basic geometry and get back to this. (sad)
}
  
  
  const circle = new Circle(10);
  console.log(circle.calcDiameter()); 
  console.log(circle.calcCircumference()); 
  console.log(circle.calcArea()); 




