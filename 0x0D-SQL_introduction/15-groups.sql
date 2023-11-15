-- Lists the number of records in a group from a selected field in a table
-- in a database in a MySQL server, and displays them in a particular order.
SELECT
    `score`,
    COUNT(*) AS `number`
FROM
    `second_table`
GROUP BY
    `score`
ORDER BY
    `number` DESC;
