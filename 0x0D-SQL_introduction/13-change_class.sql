-- Filters out and deletes some records of selected fields from a table
-- in a database in a MySQL server.
DELETE
FROM
    `second_table`
WHERE
    `score` <= 5;
