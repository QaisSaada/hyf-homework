const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

// Meals with ID
router.get('/:id', async (request, response) => {
  try {
      const id = Number(request.params.id);
      const allMeal = meals.find((meal) => meal.id === id);
      if (allMeal) {
          response.json(allMeal);
      } else {
          response.send('No meal found');
      }
  } catch (error) {
      throw error;
  }
});

// All meals in a json
router.get('/', async (request, response) => {
  try {     
          response.send(meals);             
      }
  catch (error) {
  throw error;
  }
});

// Meals that are less than max price
router.get("/maxPrice", async (request, response) => {
  try {
    if (request.query.maxPrice) {
      const maxPrice = meal.price < 100; 
      const lessThanMaxPrice = meals.filter((meal) => meals.price < maxPrice);
      response.send(lessThanMaxPrice)
    } 
  } catch (error) {
    throw error;
  }
});

//Meals that matches title 
router.get("/", async (request, response) => {
  try {
    if ('title' in request.query) {
      const title = request.query.title;
      const getTitle = meals.find((meal) =>
          meal.title.toLowerCase().includes(title.toLowerCase()),
          response.send(getTitle)
      );
  } else {
    response.send('something is wrong');
}
} catch (error) {
    throw error;
  }
});

//Meals with a limit 
router.get("/limit", async (request, response) => {
  try {
    if ('limit' in request.query) {
      const limit = request.query.limit;
      if (meals.length >= 6) {
        meals.splice(0, limit)
      }
          response.send(limit)
      ;
  } else {
    response.send('something is wrong');
}
} catch (error) {
    throw error;
  }
});




module.exports = router;
