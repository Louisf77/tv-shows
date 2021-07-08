import shows from "../utils/shows.json";
import { ShowProps } from "../utils/Types";

export default function ShowSelector({
  setShow,
  show,
}: ShowProps): JSX.Element {
  return (
    <>
      <div className="dropdown">
        <select
          name="drop"
          id="drop"
          value={show}
          onChange={(e) => {
            setShow(parseInt(e.target.value));
          }}
        >
          {shows
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((show) => (
              <option value={show.id} key={show.id}>
                {show.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
