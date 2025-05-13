import { useState, type ChangeEvent, type FormEvent } from "react";

interface UseFinderProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export default function useFinder({
  onSearch,
  placeholder,
  initialValue = "",
}: UseFinderProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      return document.getElementById("search-input")?.focus();
    }
    onSearch(searchTerm);
  };

  return {
    searchTerm,
    placeholder,
    handleInputChange,
    handleSubmit,
  };
}
