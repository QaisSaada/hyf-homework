const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
});

// Reservation with ID 
router.get('/:id', async (request, response) => {
  try {
      const id = Number(request.params.id);
      const allReservations = reservations.find((meal) => meal.id === id);
      if (allReservations) {
          response.json(allReservations);
      } else {
          response.send('No reservations found');
      }
  } catch (error) {
      throw error;
  }
});

// All reservations 
router.get('/', async (request, response) => {
  try {     
          response.json(reservations);     
  } catch (error) {
      throw error;
  }
});



module.exports = router;
