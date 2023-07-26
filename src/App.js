import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
