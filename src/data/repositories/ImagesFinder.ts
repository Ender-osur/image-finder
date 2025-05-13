import { type ImageRepository } from "../../domain/repositories/ImageRepository";
import { type Image } from "../../domain/entities/Image";
import { GoogleCustomSearchJsonAPI } from "../../infrastructure/api/GoogleCustomSearchJsonAPI";
import { mapGoogleImagesResponse } from "../mappers/MapGoogleImagesResponse";

export class ImagesFinder implements ImageRepository {
  async findImages(searchTerm: string, numResults: number): Promise<Image[]> {
    const response = await GoogleCustomSearchJsonAPI.get("/", {
      params: {
        q: searchTerm,
        num: numResults,
      },
    });
    return mapGoogleImagesResponse(response);
  }
}
