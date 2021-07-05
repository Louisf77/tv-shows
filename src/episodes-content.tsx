import episodes from "./episodes.json";
import EpisodesStructure from "./episodes-structure";
import { useState } from "react";
import epsearch from "./episodecount";

function Episodes(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="cards">
        {episodes
          .filter(
            (episode) =>
              episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((episodeObject) => (
            <EpisodesStructure
              key={episodeObject.id}
              id={episodeObject.id}
              url={episodeObject.url}
              name={episodeObject.name}
              season={episodeObject.season}
              number={episodeObject.number}
              type={episodeObject.type}
              airdate={episodeObject.airdate}
              airtime={episodeObject.airtime}
              airstamp={episodeObject.airstamp}
              runtime={episodeObject.runtime}
              image={episodeObject.image}
              summary={episodeObject.summary}
              _links={episodeObject._links}
            />
          ))}
      </div>
    </>
  );
}

export default Episodes;
