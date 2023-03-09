import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseCotext } from '../../store/Context';
import {auth,db} from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
const navigate = useNavigate();
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState('');
  const[password,setPassword]=useState("");
  const firebase =useContext(FirebaseCotext)

  function handleSubmission(e){
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((userCredential)=>{
      console.log('done');
      userCredential.user.updateProfile({ displayName: username }).then(()=>{
        console.log('first then');
        db.collection("users").add({
          id:userCredential.user.uid,
          username:username,
          phone:phone
        })
      }).then(()=>{
        console.log('second then');
        navigate("/login")
      })
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmission}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
