--Script that converts hbtn_0c_0 databaset to UTF8
USE `hbtn_0c_0`
ALTER TABLE `first_table`
CONVERT TO CHARACTER SET utf8mba COLLATE utf8mba_unicode_cli;
