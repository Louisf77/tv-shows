interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function EpisodesStructure(props: IEpisode): JSX.Element {
  return (
    <div className="episodesmain">
      <img src={props.image.original} alt="" />
      <div className="episodes">
        <h2>
          {props.name} - S{props.season.toString().padStart(2, "0")}
          {props.number.toString().padStart(2, "0")}
        </h2>
        <div className="summary">
          {props.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </div>
      </div>
    </div>
  );
}

export default EpisodesStructure;