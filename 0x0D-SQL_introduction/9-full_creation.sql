-- Creates a table in a database in a MySQL server and adds multiples rows.
CREATE TABLE
IF NOT EXISTS
    `second_table` (
        `id` INT DEFAULT NULL,
        `name` VARCHAR(256) DEFAULT NULL,
        `score` INT DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO
    `second_table` (`id`, `name`, `score`)
VALUES
    (1, "John", 10),
    (2, "Alex", 3),
    (3, "Bob", 14),
    (4, "George", 8);
