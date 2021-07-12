import EpisodeFormat from "../../utils/seasoncodeformat";
import { DropdownProps } from "../../utils/Types";

export default function Dropdown({
  dropTerm,
  setDropTerm,
  episodes,
}: DropdownProps): JSX.Element {
  const handleResetDrop = () => setDropTerm("");
  return (
    <>
      <div className="dropdown">
        <select
          name="drop"
          id="drop"
          value={dropTerm}
          onChange={(e) => {
            setDropTerm(e.target.value);
          }}
        >
          {episodes.map((episode) => (
            <option value={episode.id} key={episode.id}>
              {EpisodeFormat(episode.season, episode.number, episode.name)}
            </option>
          ))}
        </select>
        <button onClick={handleResetDrop}>Reset Search</button>
      </div>
    </>
  );
}
