import './App.scss';
import { Bottom } from './sections/bottom/Bottom';
import { Middle } from './sections/middle/Middle';
import { Top } from './sections/top/Top';

function App() {
  return (
    <div className="App">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
