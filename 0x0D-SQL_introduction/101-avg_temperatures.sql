--A SCRIPT that displays the average temperature by city ordered by tempt
SELECT `city`, AVG(`value`) AS `avg_temp`
FROM `temperature`
GROUP BY `city`
ORDER BY  `avg_temp` DESC;
