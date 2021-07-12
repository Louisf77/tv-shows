import { ShowSearchBarProps } from "../../utils/Types";
import showCount from "../../utils/showCount";


export default function ShowSearchBar({shows,showSearchTerm,setShowSearchTerm}:ShowSearchBarProps):JSX.Element{
    return (
        <>
          <div className="searchmenu">
            <input
              type="search"
              placeholder="Search for show"
              value={showSearchTerm}
              onChange={(event) => {
                setShowSearchTerm(event.target.value);
              }}
            />
            <div className="searchresults">
              Displaying{" "}
              {showCount({ showSearchTerm, shows }) === shows.length
                ? "all "
                : showCount({ showSearchTerm, shows }) + "/" + shows.length + " "}
              shows
            </div>
          </div>
        </>
      );
}