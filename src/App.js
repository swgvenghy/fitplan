import './App.css';
import Calender from './pages/Calender';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercise from './pages/Exercise';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/exercise' element={<Exercise/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
