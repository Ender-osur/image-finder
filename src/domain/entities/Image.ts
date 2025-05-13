export interface Image {
  link: string;
  title: string;
  image: {
    thumbnailLink: string;
    contextLink: string;
    width: number;
    height: number;
    byteSize: number;
  };
}

export interface GoogleImageResponse {
  data: {
    items: Image[];
  };
}
