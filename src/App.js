import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { authContext } from './store/Context';
import { auth } from './Firebase/config';
import Post from './store/postContext';
function App() {
  const { user, setUser } = useContext(authContext)
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      setUser(user)
    })

  })
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Create />} />
            <Route path='/view' element={<View />} />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
