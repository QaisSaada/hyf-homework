const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

// Reviews with ID 
router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const allRivews = reviews.find((review) => review.id === id);
        if (allRivews) {
            response.json(allRivews);
        } else {
            response.send('No reviews found');
        }
    } catch (error) {
        throw error;
    }
  });
  
  // All reviews 
  router.get('/', async (request, response) => {
    try {     
            response.json(reviews);     
    } catch (error) {
        throw error;
    }
  });



module.exports = router;
