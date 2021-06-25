import episodes from "./episodes.json";
import Episodes from "./episodes-content";
import "./App.css";
import Header from "./header"

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return (
    <div className = 'background'>
    <Header />
    <main>
      <div className = 'cards'>
      <Episodes />
      </div>
    </main>
    </div>
  );
}

export default App;
