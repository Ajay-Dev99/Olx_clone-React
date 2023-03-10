import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { storage } from '../../Firebase/config';
import { authContext } from '../../store/Context';
import { db } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const navigate=useNavigate()
  const date= new Date()
  // const db = useContext(FirebaseCotext)
  const {user} = useContext(authContext)
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState(null)

  function addImage(){
    storage.ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        db.collection("products").add({
          name,
          category,
          price,
          url,
          userid:user.uid,
          CreatedAt:date.toDateString()
        })
        navigate("/")
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="number" id="fname" name="Price" />
            <br />
  
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):""}></img>
          
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button className="uploadBtn" onClick={addImage}>upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
