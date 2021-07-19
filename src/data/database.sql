/*
 TABELAS
 */
CREATE TABLE IF NOT EXISTS user (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
  nickname VARCHAR(64) UNIQUE,
  email VARCHAR(64) UNIQUE,
  name VARCHAR(64),
  password VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS album (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
  name VARCHAR (128) UNIQUE,
  background VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS picture (
  id VARCHAR(128) UNIQUE PRIMARY KEY,
  title VARCHAR(128) UNIQUE,
  user_nickname VARCHAR(64),
  tags VARCHAR(128),
  url VARCHAR (128) UNIQUE,
  album_id VARCHAR (128),
  date DATE,
  FOREIGN KEY (user_nickname) REFERENCES user(nickname),
  FOREIGN KEY (album_id) REFERENCES album(id)
);

-- CreateUser
INSERT INTO
  user (id, nickname, name, password, email)
VALUES
  (
    'f10a653a-284e-40a3-b2f2-2163adacadb2',
    'parkournick',
    'Nicolas Alexandre',
    'nicolaslindo',
    'nicolas@nicolas.com'
  );

-- GetAllAlbums
SELECT
  *
FROM
  album;

SELECT
  COUNT(*) AS count
FROM
  picture
WHERE album_id = 'a155c1e2-5801-47cc-b761-94fbe4127066';

-- CreateAlbum
INSERT INTO
  album (id, name, background)
VALUES
  (
    'a155c1e2-5801-47cc-b761-94fbe4127066',
    'japão',
    ''
  );

-- CreatePicture
INSERT INTO
  picture (
    id,
    title,
    user_nickname,
    tags,
    url,
    album_id,
    date
  )
VALUES
  (
    '12fbb6f2-352c-4376-9a7a-5bae40e75ed9',
    'pavilhão dourado',
    'parkournick',
    'paisagem,viagem,natureza',
    'https://i.pinimg.com/564x/9f/76/ec/9f76ec06998121b5c916501da1a58f46.jpg',
    'a155c1e2-5801-47cc-b761-94fbe4127066',
    NOW()
  );

UPDATE
  album
SET
  background = 'https://i.pinimg.com/564x/9f/76/ec/9f76ec06998121b5c916501da1a58f46.jpg'
WHERE
  id = 'a155c1e2-5801-47cc-b761-94fbe4127066';

-- SearchPicture
SELECT
  *
FROM
  picture
WHERE
  album_id = 'a155c1e2-5801-47cc-b761-94fbe4127066'
  AND (
    title LIKE '%pavilhão%'
    OR tags LIKE '%pavilhão%'
  )