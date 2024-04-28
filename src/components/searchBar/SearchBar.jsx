import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      onSubmit(query);
      setQuery("");
    } else {
      toast.error("Please enter a search term");
    }
  };

  return (
    <header>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <input
          className={css.searchBarInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.searchBarButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
