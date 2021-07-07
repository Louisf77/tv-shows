import { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import SearchBar from "./searchbar";
import Episodes from "./episodefilter";
import { IEpisode } from "../utils/Types";

function FullContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropTerm, setDropTerm] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  useEffect(() => {
    const getEpisodes = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/172/episodes`);
      const jsonBody = await res.json();
      setEpisodes(jsonBody);
      console.log("test");
    };

    getEpisodes();
  }, []);
  return (
    <>
      <div className="navbar">
        <Dropdown
          episodes={episodes}
          dropTerm={dropTerm}
          setDropTerm={setDropTerm}
        />
        <SearchBar
          episodes={episodes}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <Episodes
        episodes={episodes}
        searchTerm={searchTerm}
        dropTerm={dropTerm}
      />
    </>
  );
}

export default FullContent;
