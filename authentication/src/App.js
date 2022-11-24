import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './Appheader';
import Home from './Home';
import Contact from './Contact';
import Aboutus from './Aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppHeader></AppHeader>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<Aboutus/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
