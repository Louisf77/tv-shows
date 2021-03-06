import epSearch from "../../utils/episodecount";
import { SearchBarProps } from "../../utils/Types";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  episodes,
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
          {epSearch({ searchTerm, episodes }) === episodes.length
            ? "all "
            : epSearch({ searchTerm, episodes }) + "/" + episodes.length + " "}
          episodes
        </div>
      </div>
    </>
  );
}
