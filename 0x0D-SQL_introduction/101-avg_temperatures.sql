-- Displays the average temperature (Fahrenheit) by city ordered by
-- temperature, from the table temperatures.sql.
SELECT
    `city`,
    AVG(`value`) AS `avg_temp`
FROM
    `temperatures`
GROUP BY
    `city`
ORDER BY
    `avg_temp` DESC;
