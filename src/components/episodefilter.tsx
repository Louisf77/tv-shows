import EpisodesStructure from "./episodes-structure";
import { EpisodesProp } from "../utils/Types";

export default function Episodes({
  searchTerm,
  dropTerm,
  episodes
}: EpisodesProp): JSX.Element {
  return (
    <div className="cards">
      {dropTerm === ""
        ? episodes
            .filter(
              (episode) =>
                episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((episodeObject) => (
              <EpisodesStructure key={episodeObject.id} {...episodeObject} />
            ))
        : episodes
            .filter((episode) => episode.id === parseInt(dropTerm))
            .map((episodeObject) => (
              <EpisodesStructure key={episodeObject.id} {...episodeObject} />
            ))}
    </div>
  );
}
