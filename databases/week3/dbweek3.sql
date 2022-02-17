SHOW DATABASES

USE MealSharing

CREATE TABLE meal (
id INT(10) PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT null,
location VARCHAR(255)NOT NULL,
whenn DATETIME,
maxreservations INT(10),
price DECIMAL(5 , 2),
createddate DATE
);



CREATE TABLE reservation (
id INT(10) PRIMARY KEY,
numberofguists INT(20),
mealid INT(10),
createddate DATE,
contactphonenumber VARCHAR(255) NOT NULL,
contactname VARCHAR (255) NOT NULL,
contactemail VARCHAR(255) NOT NULL
);

CREATE TABLE review(
  id int(10) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NULL,
  meal_id int(10),
  stars int(5),
  created_date DATE NOT NULL
  );
 
 
 /* Get all meals*/ 

 SELECT * FROM meal; 

 /* Add a new meal*/ 


INSERT INTO meal
VALUES (1, 'pizza', 'an italian classic', 'italy', '2021-10-06 19:39:16', 5, 50.50, '2022-03-03');

/* Get a meal with any id, fx 1*/ 

SELECT * FROM meal WHERE id = 1;

/* update meal*/ 

UPDATE meal
SET description = 'You should know what a pizza is'
WHERE id = 1;

/* delete meal*/

DELETE FROM meal WHERE id = 1; 

/* Get all reservations */ 

SELECT * FROM reservation; 

/* Add a new reservation */ 


INSERT INTO reservation 
VALUES (1, 5, 1, '2020-09-01','0045-27111931', 'qais', 'qais@hyf.org');

/* Get a reservation with any id, fx 1*/

SELECT * FROM reservation WHERE id = 1; 

/* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE reservation
SET numberofguists  = 8
WHERE id = 1;

/* Delete a reservation with any id, fx 1*/
DELETE FROM reservation WHERE id = 1; 

/* Get all review */ 

SELECT * FROM review; 

/* Add a new review */ 


INSERT INTO review 
VALUES (1, 'pizza review', 'not a bad pizza yet not a good one', 1, 3, '2020-07-08');

/* Get a review with any id, fx 1*/

SELECT * FROM review WHERE id = 1; 

/* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes*/
UPDATE review
SET description  = 'the pizza was acyually ok'
WHERE id = 1;

/* Delete a review with any id, fx 1*/
DELETE FROM review WHERE id = 1; 


/* Additional queries*/ 

/* adding meals*/ 
insert into
  meal 
values
  (
    1,
    'Mansaf',
    'Jordanian national dish',
    'Amman',
    "2021-11-09 14:20:12",
    4,
    300.00,
    "2022-01-19"
  );
 
insert into
  meal 
values
  (
    2,
    'pizza',
    'a classic Italian dish',
    ' Napels',
    "2022-10-07 15:40:00",
    2,
    100.00,
    "2022-02-13"
  );
 
 
insert into
  meal 
values
  (
    3,
    'soup',
    'fresh liquid',
    'my grandmas house',
    "2022-12-05 23:00:10",
    3,
    150.00,
    "2022-10-10"
  );
 
 
insert into
  meal 
values
  (
    4,
    'bbq',
    'kebab and sheesh',
    'Norbro',
    "2022-10-10 10:10:10",
    4,
    400.00,
    "2022-10-10"
  );

 
 SELECT * FROM meal;

/*add reservations*/

insert into
  reservation 
values
  (
    1,
    10,
    1,
    "2022-10-10",
    '4234234',
    'Malte F.M',
    'malte@it.com'
  );
 
 
 
insert into
  reservation 
values
  (
    2,
    5,
    2,
    '2022-10-10',
    '2345645',
    'Qais saada',
    'qais@poop.com'
  );
 
 
 
insert into
  reservation 
values
  (
    3,
    4,
    3,
    '2022-10-10',
    '12324365',
    'Emilie Nydam',
    'emilie@weee.com'
  );
 
 
 
insert into
  reservation 
values
  (
    4,
    8,
    4,
    '2022-10-10',
    '6587094365',
    'Ahmad Mohammed',
    'ahmad@poop.com'
  );
 
 SELECT * FROM reservation;

/*adding to reviews*/

insert into
review 
values
  (
    1,
    'Mansaf',
    'fantastic if you are into meat',
    1,
    5,
    '2022-10-10'
  );
 
 
insert into
  review 
values
  (
    2,
    'pizza',
    'An italian shoots themselv every time this pizza is served',
    2,
    1,
    '2022-10-10'
  );
 
 
insert into
  review 
values
  (
    3,
    'soup',
    'Home made lentil soup that is homy and warm',
    3,
    3,
    '2022-10-10'
  );
 
 
insert into
  review 
values
  (
    4,
    'bbq',
    'best bb1 in town',
    4,
    4,
    "2022-10-10"
  );

 SELECT * FROM review;

/* Get meals that has a price smaller than a specific price fx 90*/

SELECT * FROM meal WHERE price < 200;

/* Get meals that still has available reservations*/

/* I don't understand what do you mean with (available) or what is the task*/

SELECT * FROM meal WHERE title LIKE '%pizza%'; 

/* Get meals that has been created between two dates*/

SELECT * FROM meal WHERE createddate BETWEEN '2022-08-01' AND '2022-12-30';

/*Get only specific number of meals fx return only 5 meals*/

SELECT * FROM meal LIMIT 2; 

/* Get the meals that have good reviews*/

SELECT * FROM meal JOIN review ON meal.id = review.meal_id WHERE review.stars >= 4;  

/* Get reservations for a specific meal sorted by created_date*/ 

SELECT * FROM reservation WHERE mealid = 2 ORDER BY createddate; 

/* Sort all meals by average number of stars in the reviews*/ 
SELECT * FROM meal JOIN review ON meal.id = review.meal_id ORDER BY stars; 

insert into
  review 
values
  (
    5,
    'soup',
    'this was shit',
    3,
    3,
    '2022-10-10'
  );
 
 insert into
  review 
values
  (
    6,
    'soup',
    'it was  whatever',
    3,
    1,
    '2022-10-10'
  );
 
 SELECT * FROM meal JOIN review ON meal.id = review.meal_id ORDER BY AVG(review.stars); 

SELECT meal.title, AVG(review.stars) AS avg_stars FROM meal JOIN review ON meal.id = review.meal_id GROUP BY meal.title ORDER BY avg_stars ;













