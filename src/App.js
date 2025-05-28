import { Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import { About } from './ui/About';
import { Content } from './ui/Content';
import { Navbar } from './ui/Navbar';
import { Gallery } from './ui/Gallery';
import { Shop } from './ui/Shop';

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Content' element={<Content/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Shop' element={<Shop/>}/>
    </Routes>
    </div>
  );
}

export default App;
