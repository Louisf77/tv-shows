import { useContext } from "react";
import { showContext } from "../App";

function Header(): JSX.Element {
  const setSelectedShow = useContext(showContext);
  const handleResetShow = () => setSelectedShow(172);
  return (
    <div className="header">
      <h1 onClick={handleResetShow}>Tv Shows</h1>
    </div>
  );
}

export default Header;
