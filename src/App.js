import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatcher} from "react-redux"
import Footer from './components/Footer';
import Countercmp from './components/Countercmp';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import {Route,Routes} from "react-router-dom"
function App() {
  let x = useSelector((s)=>s.counter.count)
 
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/userprofile" element={<UserProfile></UserProfile>}/>
     {/* <Countercmp></Countercmp>
     <Login/> */}
     </Routes>
    
        </div>
  );
}

export default App;
