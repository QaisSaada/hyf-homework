/*const { response } = require("express");*/
  const express = require("express");
  const app = express();
  module.exports = app;

// import data here
  const meals = require("./data/meals");
  const reviews = require("./data/reviews")
  const reservations = require("./data/reservations")

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
// task 1
app.get("/meals", async(request, response) => {
  const reviewedMeals = meals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
  });
  response.json(reviewedMeals);
});
// task 2 
app.get("/cheap-meals", async (request, response) => { 
  const cheapMeals = meals.filter(meal => meal.price < 80)
  const reviewedCheapMeals = cheapMeals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});
response.json(reviewedCheapMeals);
});
// task 3 
app.get("/large-meals", async (request, response) => { 
  const maxPeople = meals.filter(meal => meal.maxNumberOfGuests >= 5)
  const reviewedMaxPeople = maxPeople.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
  });
  response.json(reviewedMaxPeople);
});
// task 4 (This one is not working. Milton said that random meal here is a single object so no need to .map it (makes sens), but even when I take that out it doesn't respond accordingly. I will work with it further.)
app.get("/meal", async (request, response) => {
  const randomMeal = meals[Math.floor(Math.random()*meals.length)];
  const reviewedRandomMeal = randomMeal.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
  });
  response.json(reviewedRandomMeal);
});
// task 5 
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});
// task 6 also not working. Clearly I have a problem understanding .random!
app.get("//reservation", async (request, response) => { 
  const randomReservation = reservations[Math.floor(Math.random()*reservations.length)];
  response.json(randomReservation);
  });

