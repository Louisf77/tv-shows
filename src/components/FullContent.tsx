import { useState, useEffect } from "react";
import Dropdown from "./episodelisting/Dropdown";
import SearchBar from "./episodelisting/SearchBar";
import Episodes from "./episodelisting/EpisodeFilter";
import { IEpisode } from "../utils/Types";
import ShowSelector from "./episodelisting/ShowSelector";

export default function FullContentEpisodes(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropTerm, setDropTerm] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [show, setShow] = useState<number>(172);
  useEffect(() => {
    const getEpisodes = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${show}/episodes`);
      const jsonBody = await res.json();
      setEpisodes(jsonBody);
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


