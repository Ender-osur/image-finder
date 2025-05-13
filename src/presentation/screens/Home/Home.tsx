import { useState } from "react";
import { FindImages } from "../../../domain/useCases/FindImages.ts";
import { ImagesFinder } from "../../../data/repositories/ImagesFinder.ts";
import FindBar from "../../components/findBar/FindBar.tsx";
import ImageGrid from "../../components/imageGrid/ImageGrid.tsx";
import "./Home.css";
import type { Image } from "../../../domain/entities/Image.ts";

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);

  const imagesFinder = new ImagesFinder();

  const onSearch = async (searchTerm: string) => {
    console.log("DESDE HOME", searchTerm);
    const useCase = new FindImages(imagesFinder);
    const results = await useCase.execute(searchTerm, 9);
    setImages(results);
    console.log("results", results);
  };

  return (
    <div className="home">
      <FindBar onSearch={onSearch} placeholder="Buscar imágenes..." />
      <ImageGrid images={images} onSelect={() => {}} />
    </div>
  );
}
