/*
  TABELAS
*/
CREATE TABLE IF NOT EXISTS users (
  nickname VARCHAR(64) UNIQUE PRIMARY KEY,
  email VARCHAR(64) UNIQUE,
  name VARCHAR(64),
  password VARCHAR(64)
);


CREATE TABLE IF NOT EXISTS pictures (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
	subtitle VARCHAR(128),
	author VARCHAR(64),
	date Date,
	file VARCHAR (128),
	collection VARCHAR(64),
  FOREIGN KEY (author) REFERENCES users(nickname)
);

CREATE TABLE IF NOT EXISTS picture_tags (
  picture_id VARCHAR(128),
  tag VARCHAR(64),
  PRIMARY KEY (picture_id, tag),
  FOREIGN KEY (picture_id) REFERENCES pictures(id)
);


/*
  OPERAÇÕES
*/

/*SELECIONAR TODAS AS TAGS DE UMA IMAGEM*/
SELECT tag FROM picture_tags WHERE picture_id = 123;