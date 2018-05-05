DROP DATABASE IF EXISTS `game`;
CREATE DATABASE `game`;

USE sgame;

CREATE TABLE characters
(
	id int (5) NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	health int(5) NOT NULL,
    money int(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE spaceships
(
	id int (5) NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	fuel int(10) NOT NULL,
	PRIMARY KEY (id)
);