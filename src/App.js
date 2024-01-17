import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navmenu from './components/Navmenu';
import HomePage2 from './components/HomePage2';
import HomePage1 from './components/HomePage1';

function App() {
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/home2" element={<HomePage2 />} />
      </Routes >
    </>

  );
}

export default App;
