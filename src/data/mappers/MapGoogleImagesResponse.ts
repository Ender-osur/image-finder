import {
  type Image,
  type GoogleImageResponse,
} from "../../domain/entities/Image";

export function mapGoogleImagesResponse(
  response: GoogleImageResponse
): Image[] {
  const items = response?.data?.items;

  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item.image?.thumbnailLink)
    .map((item) => ({
      link: item.link,
      title: item.title || "",
      image: {
        thumbnailLink: item.image.thumbnailLink || "",
        contextLink: item.image.contextLink || "",
        width: item.image.width || 0,
        height: item.image.height || 0,
        byteSize: item.image.byteSize || 0
      }
    }));
}
