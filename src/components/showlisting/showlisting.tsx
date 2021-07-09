import { ShowListProps } from "../../utils/Types";


export default function ShowListStructure ( {name,image,summary,genre,status,rating,runtime}:ShowListProps):JSX.Element {
    return (
       <div className="showcards">
           <div className="showheader">{name}</div>
           <img src={image.original} alt="" />
           <div className="showcontent">
               {summary}
               <div className="showstats">
                   <ul>
                       <li><b>Rating:</b>{rating}</li>
                       <li><b>Genres:</b>{genre}</li>
                       <li><b>Status:</b>{status}</li>
                       <li><b>Runtime:</b>{runtime}</li>
                   </ul>
               </div>
           </div>
       </div> 
    )
}