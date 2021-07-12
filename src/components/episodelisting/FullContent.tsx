import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Episodes from "./EpisodeFilter";
import { IEpisode } from "../../utils/Types";
import ShowSelector from "./ShowSelector";
import { FullContentEpisodesProps } from "../../utils/Types";

export default function FullContentEpisodes({
  selectedShow,
}: FullContentEpisodesProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropTerm, setDropTerm] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [show, setShow] = useState<number>(selectedShow);

  useEffect(() => {
    function showState(show: number): number {
      if (show !== selectedShow) {
        return show;
      } else {
        return selectedShow;
      }
    }
    const getEpisodes = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/shows/${showState(show)}/episodes`
      );
      const jsonBody = await res.json();
      setEpisodes(jsonBody);
    };
    getEpisodes();
  }, [show, selectedShow]);

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
