
import './App.css';
import PrimarySearchAppBar from './navbar';
import Sec from './secsec'
import Third from './third'
import Forth from './forth'
import Fifth from './fifth'


function App() {
  return (
    <div className="App">
  <PrimarySearchAppBar ></PrimarySearchAppBar>
  <Sec/>
<Third/>
<Forth/>
<Fifth/>
    </div>
  );
}

export default App;
