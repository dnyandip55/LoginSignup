import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Login/> }></Route>
          <Route path='/register' element={<Signup/> }></Route>
          <Route path='/login' element={<Login/> }></Route>
          <Route path='/home' element={<Home/> }></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
