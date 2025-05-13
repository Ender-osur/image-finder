import { type ImageRepository } from '../repositories/ImageRepository';
import { type Image } from '../entities/Image';


export class FindImages {
  private imageRepository: ImageRepository;

  constructor(imageRepository: ImageRepository) {
    this.imageRepository = imageRepository;
  }

  async execute(searchTerm: string, numResults: number): Promise<Image[]> {
    return await this.imageRepository.findImages(searchTerm, numResults);
  }
}

