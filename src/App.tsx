import { greet } from "./utils/greet";
import episodes from './episodes.json'
import Episodes from "./episodes-content";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return <> 
          <Episodes />
        </>
}

export default App;
