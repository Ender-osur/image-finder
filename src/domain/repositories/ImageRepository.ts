import { type Image } from "../entities/Image";

export interface ImageRepository {
  findImages(searchTerm: string, numResults: number): Promise<Image[]>;
}
