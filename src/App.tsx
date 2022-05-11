import './App.scss';
import { Middle } from './sections/middle/Middle';
import { Top } from './sections/top/Top';
import Bg from './assets/mobile/image-host.jpg'

function App() {
  return (
    <div className="App">
      <img src={Bg} alt="background"  style={{position:'absolute',width:'100%'}}/>
      <Top />
      <Middle />
    </div>
  );
}

export default App;
