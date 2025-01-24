import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatcher} from "react-redux"
import Footer from './components/Footer';
import Countercmp from './components/Countercmp';

function App() {
  let x = useSelector((s)=>s.counter.count)
  return (
    <div className="App">
      {x}
      <div style={{backgroundColor:'yellow' ,border:'1px solid black'}}>
<Countercmp></Countercmp>
      </div>
      <Footer></Footer>
        </div>
  );
}

export default App;
