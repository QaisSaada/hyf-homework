const redBox = document.querySelector('ul.marks li:nth-child(1)');
    const blueBox = document.querySelector('ul.marks li:nth-child(2)');
    const greenBox = document.querySelector('ul.marks li:nth-child(3)');
    const boxes = [redBox, blueBox, greenBox];




async function translateOneByOne() {
try {
await moveElement(redBox, { x: 20, y: 300 });
console.log("RED MOVED");
await moveElement(blueBox, {x: 400, y: 300});
console.log("BLUE MOVED");
await moveElement(greenBox, {x: 400, y: 20});
console.log("GREEN MOVED");
} catch (error) {
    console.log(error);
}
return ("it worked")
}

translateOneByOne();

async function translateAllAtOnce() {
try {
  moveElement(redBox, { x: 20, y: 300 });
  moveElement(blueBox, { x: 400, y: 300 });
  moveElement(greenBox, { x: 400, y: 20 });
  console.log("All Boxes are Moved at Once");
}
catch (error) {
    console.log(error);
}
};


//translateAllAtOnce();
    
