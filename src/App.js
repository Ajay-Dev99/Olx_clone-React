import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {authContext} from './store/Context';
import { auth } from './Firebase/config';

function App() {
  const {user,setUser}=useContext(authContext)
  useEffect(()=>{

    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
      <Router>       
      <Routes>
      <Route exact path="/" element={<Home  />} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
