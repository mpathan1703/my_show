
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Movies } from './pages/Movies';
import { Stream } from './pages/Stream/Stream';
import { Events } from './pages/Events/Events';
import { Plays } from './pages/Plays/Plays';
import { Sports } from './pages/Sports/Sports';
import { Activities } from './pages/Activities/Activities.js';
import { Footer } from './Footer/Footer';
import { ListYourShows } from './pages/Shows/ListYourShows.js';
import { Corporates } from './pages/Corporates.js';
import { Offeres } from './pages/Offeres.js';
import { GiftCards } from './pages/GiftCards.js';


function App() {
  return (
    <div className='bg-light'>
      <Header />
      <Routes>
        <Route path='/' element={<Movies />}></Route>
        <Route path='/stream' element={<Stream />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path="/plays" element={<Plays />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='/list-your-shows' element={<ListYourShows/>}></Route>
        <Route path='/corporates' element={<Corporates/>}></Route>
        <Route path='/offers' element={<Offeres/>}></Route>
        <Route path='/Giftcards' element={<GiftCards/>}></Route>
        <Route path='*' element={<h4>Page Not Found!!!</h4>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
