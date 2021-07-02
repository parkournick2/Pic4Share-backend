export type picture = {
  id: string;
  subtitle: string;
  author: string;
  date: Date;
  file: string;
  tags: string;
};

export type createPictureDTO = {
  subtitle: string;
  author: string;
  file: string;
  tags: string;
};

