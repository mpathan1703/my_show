
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Movies } from './pages/Movies';
import { Stream } from './pages/Stream';
import { Events } from './pages/Events';
import { Plays } from './pages/Plays';
import { Sports } from './pages/Sports';
import { Activities } from './pages/Activities';


function App() {
  return (
    <>
    <Header />
    <Routes>
<Route path='/' element={<Movies/>}></Route>
<Route path='/stream' element={<Stream/>}></Route>
<Route path='/events' element={<Events/>}></Route>
<Route path="/plays" element={<Plays/>}></Route>
<Route path='/sports' element={<Sports/>}></Route>
<Route path='/activities' element={<Activities/>}></Route>

    </Routes>
    </>
  );
}

export default App;
