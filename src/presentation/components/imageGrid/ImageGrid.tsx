import { type Image } from "../../../domain/entities/Image";
import "./ImageGrid.css";

interface Props {
  images: Image[];
  onSelect: (img: Image) => void;
}

export default function ImageGrid({ images, onSelect }: Props) {
  if (images.length === 0) {
    return (
      <div className="image-grid__empty">
        <p>No se encontraron imágenes</p>
      </div>
    );
  }

  return (
    <div className="image-grid">
      {images.map((img) => (
        <article key={img.link} className="image-grid__item">
          <div className="image-grid__image-container">
            <img 
              src={img.link} 
              alt={img.title} 
              className="image-grid__image"
              loading="lazy"
            />
          </div>
          <div className="image-grid__info">
            <h3 className="image-grid__title">{img.title}</h3>
            <div className="image-grid__details">
              <span>{img.image.width}x{img.image.height}</span>
              <span>{Math.round(Number(img.image.byteSize) / 1024)}KB</span>
            </div>
            <button 
              className="image-grid__button"
              onClick={() => onSelect(img)}
              aria-label={`Visitar imagen: ${img.title}`}
            >
              Visitar
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
