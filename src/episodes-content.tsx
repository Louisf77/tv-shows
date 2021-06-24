import episodes from "./episodes.json";
import EpisodesStructure from "./episodes-structure";

function Episodes(): JSX.Element {
  return (
    <div className="episodemain">
      {episodes.map((episodeObject) => (
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
  );
}

export default Episodes;
