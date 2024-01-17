-- Lists all records of selected fields from a table in a database in a MySQL
-- server, and displays them in a particular order.
SELECT
    `score`,
    `name`
FROM
    `second_table`
ORDER BY
    `score` DESC;
