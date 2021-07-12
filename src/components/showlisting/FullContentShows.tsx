import ShowSearchBar from "./ShowSearchBar";
import shows from "../../utils/shows.json";
import { useState } from "react";
import ShowFilter from "./ShowFilter";
import ShowDropDown from "./ShowDropDown";

export default function FullContentShows(): JSX.Element {
  const [showSearchTerm, setShowSearchTerm] = useState<string>("");
  const [showDropTerm, setShowDropTerm] = useState("");

  return (
    <>
      <ShowDropDown
        shows={shows}
        showDropTerm={showDropTerm}
        setShowDropTerm={setShowDropTerm}
      />
      <ShowSearchBar
        shows={shows}
        showSearchTerm={showSearchTerm}
        setShowSearchTerm={setShowSearchTerm}
      />
      <ShowFilter
        shows={shows}
        showSearchTerm={showSearchTerm}
        showDropTerm={showDropTerm}
      />
    </>
  );
}
