-- Lists all records of selected fields from a table in a database in a MySQL
-- server, that passes a specified condition, and displays them in a
-- particular order.
SELECT
    `score`,
    `name`
FROM
    `second_table`
WHERE
    `name` != ""
ORDER BY
    `score` DESC;
