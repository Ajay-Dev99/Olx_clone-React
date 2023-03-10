import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { db } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/postContext';

function Posts() {
  const navigate=useNavigate()
  const {setPostDetails}=useContext(PostContext)
const [products,setProducts]=useState([])
  useEffect(()=>{
    db.collection("products").get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allPost)
      console.log(allPost);
    })
  },[])

 

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
      {products.map((product)=>{
        return <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
              navigate("/view")
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.CreatedAt}</span>
            </div>
          </div>
        
      })         
       }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
