import { useState } from "react";
import Dropdown from "./dropdown";
import SearchBar from "./searchbar";
import Episodes from "./episodefilter";

function FullContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropTerm, setDropTerm] = useState("");
  return (
    <>
      <div className="navbar">
        <Dropdown dropTerm={dropTerm} setDropTerm={setDropTerm} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <Episodes searchTerm={searchTerm} dropTerm={dropTerm} />
    </>
  );
}

export default FullContent;
