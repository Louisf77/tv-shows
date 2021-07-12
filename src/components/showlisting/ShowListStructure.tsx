import { ShowListProps } from "../../utils/Types";
import { useContext } from "react";

import { showContext } from "../../App";
export default function ShowListStructure({
  name,
  image,
  summary,
  genres,
  status,
  rating,
  runtime,
  id,
}: ShowListProps): JSX.Element {
  const setSelectedShow = useContext(showContext);
  const handleSetSelectedShow = () => {
    setSelectedShow(id);
  };
  return (
    <div className="showcards" onClick={handleSetSelectedShow}>
      <div className="showheader">{name}</div>
      <img src={image.medium} alt="" />
      <div className="showcontent">
        {summary?.replace(/<p>|<b>|<\/p>|<\/b>/g, "")}
        <div className="showstats">
          <ul>
            <li>
              <b>Rating: </b>
              {rating.average === null ? `N/A` : rating.average}
            </li>
            <li>
              <b>Genres:</b>
              {genres}
            </li>
            <li>
              <b>Status:</b>
              {status}
            </li>
            <li>
              <b>Runtime:</b>
              {runtime}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
