import ShowListStructure from "./ShowListStructure"
import { ShowFilterProps } from "../../utils/Types"


export default function ShowFilter({showDropTerm,shows,showSearchTerm}:ShowFilterProps):JSX.Element{
    return (
        <div className="cards">
        {showDropTerm === ""
          ? shows.sort((a, b) => a.name.localeCompare(b.name))
              .filter(
                (show) =>
                  show.name.toLowerCase().includes(showSearchTerm.toLowerCase()) ||
                  show.summary.toLowerCase().includes(showSearchTerm.toLowerCase())
              )
              .map((showObject) => (
                <ShowListStructure key={showObject.id} {...showObject} />
              ))
          : shows
              .filter((show) => show.id === parseInt(showDropTerm))
              .map((showObject) => (
                <ShowListStructure key={showObject.id} {...showObject} />
              ))}
      </div>
    )
}