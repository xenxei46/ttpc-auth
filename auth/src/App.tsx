import {StyledContainer} from './Components/Styled';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';



// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';;

function App() {
  return (
        <StyledContainer>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>        
          </BrowserRouter>
        </StyledContainer>
  );
}

export default App;
