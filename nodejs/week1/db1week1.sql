/* 1 */
SELECT COUNT(id) FROM task t;
/* 2 */ 
SELECT COUNT(id) FROM task t WHERE due_date IS NULL; 
/* 3 */
SELECT COUNT(id) FROM task t WHERE status_id = 3;
/* 4 */
SELECT COUNT(id) FROM task t WHERE status_id != 3;
/* 5 */
SELECT * FROM task t ORDER BY created DESC;
/* 6 */
SELECT * FROM task ORDER BY created DESC LIMIT 1;
/* 7 */ 
SELECT title, due_date FROM task t WHERE title LIKE '%database%';
/* 8 */ 
SELECT task.status_id, task.title, status.name FROM task JOIN status ON task.status_id = status.id;
/* 9 */
SELECT COUNT(task.id), status.name FROM task JOIN status ON status.id = task.status_id GROUP BY status.id ;

