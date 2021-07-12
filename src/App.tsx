import "./App.css";
import Header from "./components/Header";
import FullContentEpisodes from "./components/episodelisting/FullContent";
import FullContentShows from "./components/showlisting/FullContentShows";
import { useState, createContext } from "react";

export const showContext = createContext<(selectedShow: number) => void>(() => {
  console.log("");
});
function App(): JSX.Element {
  const [selectedShow, setSelectedShow] = useState<number>(172);
  return (
    <div className="background">
      <showContext.Provider value={setSelectedShow}>
        <Header />
        <main>
          {selectedShow === 172 ? (
            <FullContentShows />
          ) : (
            <div className="maincontent">
              <FullContentEpisodes selectedShow={selectedShow} />
            </div>
          )}
        </main>
      </showContext.Provider>
    </div>
  );
}

export default App;
