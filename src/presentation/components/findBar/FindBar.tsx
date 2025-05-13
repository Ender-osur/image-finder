import useFinder from "./useFinder";
import "./FindBar.css";

interface FindBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export default function FindBar(props: FindBarProps) {
  const {
    searchTerm,
    placeholder,
    handleInputChange,
    handleSubmit,
  } = useFinder(props);

  return (
    <form className="find-bar" onSubmit={handleSubmit}>
      <div className="find-bar__container">
        <input
          id="search-input"
          type="text"
          className="find-bar__input"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-label="Campo de búsqueda"
        />
        <button type="submit" className="find-bar__button" aria-label="Buscar">
          <span>Buscar</span>
        </button>
      </div>
    </form>
  );
}
