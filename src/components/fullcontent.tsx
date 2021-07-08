import { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import SearchBar from "./searchbar";
import Episodes from "./episodefilter";
import { IEpisode } from "../utils/Types";
import ShowSelector from "./showselector";

function FullContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropTerm, setDropTerm] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [show, setShow] = useState<number>(172);
  useEffect(() => {
    const getEpisodes = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${show}/episodes`);
      const jsonBody = await res.json();
      setEpisodes(jsonBody);
      console.log("test");
    };

    getEpisodes();
  }, [show]);
  return (
    <>
      <div className="navbar">
        <ShowSelector show={show} setShow={setShow} />
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
