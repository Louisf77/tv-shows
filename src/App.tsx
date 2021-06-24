import episodes from "./episodes.json";
import Episodes from "./episodes-content";
import "./App.css";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return (
    <main>
      <Episodes />
    </main>
  );
}

export default App;
