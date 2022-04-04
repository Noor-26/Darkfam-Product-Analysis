import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/charts" element={<Charts/>}/>
      </Routes>
    </div>
  );
}

export default App;
