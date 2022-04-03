import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/charts" element={<Charts/>}/>
      </Routes>
    </div>
  );
}

export default App;
