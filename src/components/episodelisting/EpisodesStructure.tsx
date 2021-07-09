import { IEpisode } from "../../utils/Types";

function EpisodesStructure(props: IEpisode): JSX.Element {
  return (
    <div className="episodesmain">
      {props.image.original === "null" ? (
        <img
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          alt=""
        />
      ) : (
        <img src={props.image?.original} alt="" />
      )}
      <div className="episodes">
        <h2>
          {props.name} - S{props.season.toString().padStart(2, "0")}
          {props.number.toString().padStart(2, "0")}
        </h2>
        <div className="summary">
          {props.summary?.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </div>
      </div>
    </div>
  );
}

export default EpisodesStructure;
