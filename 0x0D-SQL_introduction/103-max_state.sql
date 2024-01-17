-- Displays the max temperature of each state (ordered by State name),
-- from the table temperatures.sql.
SELECT
    `state`,
    MAX(`value`) AS `max_temp`
FROM
    `temperatures`
GROUP BY
    `state`
ORDER BY
    `state`;
