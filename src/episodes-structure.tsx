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
    <div className="episodes">
      <h1>
        {props.name} - S{props.season.toString().padStart(2, "0")}
        {props.number.toString().padStart(2, "0")}
      </h1>
      <img src={props.image.medium} alt="" />
      <div className="summary">{props.summary}</div>
    </div>
  );
}

export default EpisodesStructure;
