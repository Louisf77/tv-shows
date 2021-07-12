import { ShowDropDownProps } from "../../utils/Types";

export default function ShowDropDown({
  shows,
  showDropTerm,
  setShowDropTerm,
}: ShowDropDownProps): JSX.Element {
  const handleResetDrop = () => setShowDropTerm("");
  return (
    <>
      <div className="dropdown">
        <select
          name="drop"
          id="drop"
          value={showDropTerm}
          onChange={(e) => {
            setShowDropTerm(e.target.value);
          }}
        >
          {shows
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((show) => (
              <option value={show.id.toString()} key={show.id}>
                {show.name}
              </option>
            ))}
        </select>
        <button onClick={handleResetDrop}>Reset Search</button>
      </div>
    </>
  );
}
