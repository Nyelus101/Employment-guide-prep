import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import SignoutPage from './components/pages/SignoutPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signout' element={<SignoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



/*import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';


export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/products' element={<Products />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}*/