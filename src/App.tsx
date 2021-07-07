import "./App.css";
import Header from "./components/header";
import FullContent from "./components/episodes-content";



function App(): JSX.Element {
  return (
    <div className="background">
      <Header />
      <main>
        <div className="maincontent">
          <FullContent />
        </div>
      </main>
    </div>
  );
}

export default App;
