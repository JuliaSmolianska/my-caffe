import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navmenu from './components/Navmenu';
import HomePage1 from './components/HomePage1';

function App() {
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage1 />} />
      </Routes >
    </>

  );
}

export default App;
