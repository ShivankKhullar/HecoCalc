import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Results';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/results' element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default App;
