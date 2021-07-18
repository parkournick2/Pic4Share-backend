export type picture = {
  id: string;
  title: string;
  user_nickname: string;
  tags: string;
  url: string;
  album_id: string;
  date: Date;
};

export type createPictureDTO = {
  title: string;
  user_nickname: string;
  tags: string;
  url: string;
  album_id: string;
};