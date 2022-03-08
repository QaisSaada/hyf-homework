/* week 2 homework */ 

/* working with tasks */ 

USE hyf;
SELECT * FROM task t ;
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('study', 'do homework', '2022-02-11', '2022-02-11', '2022-02-15', 2, 4); 

UPDATE task 
SET title = 'its not all about money'
WHERE id = 2;

UPDATE task 
SET due_date = '2017-12-25'
WHERE id = 2;

/* not sure what is the dif btwn Change a task status
Mark a task as complete */

DELETE FROM task 
WHERE id = 15;


/* Part 2: School database*/

CREATE DATABASE school;
DEFAULT CHARACTER SET = 'utf8mb4';
USE school ;

CREATE TABLE class (
    id int(10) unsigned NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NULL DEFAULT NULL,
    PRIMARY KEY (id)
    )
    
    CREATE TABLE student (
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone  varchar(255) NULL,
    class_id int(10) unsigned NOT NULL,
 FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)

    ALTER TABLE class ADD COLUMN status ENUM(1, 2, 3);

    /* Part 3: More queries */

    SELECT  *
    FROM `user` u 
    WHERE email LIKE '%@spotify.com';

    USE hyf;
   SELECT * FROM task t ;
   SELECT * FROM `user` u ;
  
  SELECT *
  FROM task
  JOIN task on task.id=user_task.task_id
  JOIN user ON user.id=user_task.user_id
  WHERE user.email LIKE '%@spotify.com';

SELECT *
FROM task
JOIN user_task on task.id=user_task.task_id
JOIN user ON user.id=user_task.user_id
WHERE user.name='Donald Duck' AND task.status LIKE '%Not started';

/* Part 4: Creating a database*/
/* uploaded separately*/ 

