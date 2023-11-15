-- Creates a table in the current database in a MySQL server.
CREATE TABLE
IF NOT EXISTS
    `first_table`(
        `id` INT DEFAULT NULL,
        `name` VARCHAR(256) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
