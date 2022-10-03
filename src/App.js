import './App.css';
import { Route, Routes } from 'react-router-dom';
import Billboard from './components/Billboard';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header name="BizAd" />

      <Routes>
          <Route path='/' element={<Billboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
