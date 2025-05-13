import FindBar from "../../components/findBar/FindBar.tsx";
import ImageGrid from "../../components/imageGrid/ImageGrid.tsx";
import "./Home.css";

export default function Home() {

  const onSearch = (searchTerm: string) => {
    console.log("DESDE HOME",searchTerm);
  }

  return (
    <div className="home">
      <FindBar onSearch={onSearch} placeholder="Buscar imágenes..." />
      <ImageGrid />
    </div>
  );
}
