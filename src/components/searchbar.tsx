import episodes from "../utils/episodes.json";
import epsearch from "./episodecount";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps): JSX.Element {
  return (
    <>
      <div className="searchmenu">
        <input
          type="search"
          placeholder="Use a keyword to search....."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="searchresults">
          Displaying{" "}
          {epsearch(searchTerm) === episodes.length
            ? "all "
            : epsearch(searchTerm) + "/" + episodes.length + " "}
          episodes
        </div>
      </div>
    </>
  );
}
