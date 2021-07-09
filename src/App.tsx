import "./App.css";
import Header from "./components/Header";
import FullContentEpisodes from "./components/FullContent";

function App(): JSX.Element {
  return (
    <div className="background">
      <Header />
      <main>
        <div className="maincontent">
          <FullContentEpisodes />
        </div>
      </main>
    </div>
  );
}

export default App;
