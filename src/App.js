import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Charts from './components/Charts/Charts';
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import Notfound from './components/Notfound/Notfound';
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
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
