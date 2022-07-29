import './App.css';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Typical from 'react-typical'
import Register from './components/pages/Register';
import Link from './cart/Link';


function App() {
  
  return (
  <>
  
    <Router>
    <Navbar></Navbar>
    
       <Routes>
       <Route exact path='/' element={<><Home/></>}/>
       <Route exact path='/blog' element={<Blog/>} />
       <Route exact path='/About-us' element={<About/>} />
       <Route exact path='/cart' element={<Link/>} />
       <Route exact path='/login' element={<Login/>} />
       <Route exact path='/register' element={<Register/>}/>
      

       </Routes>
    </Router>
  
    
  
    
   
</>
  )
}


export default App;
