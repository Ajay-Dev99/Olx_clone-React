import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext } from '../../store/Context';
import { auth } from '../../Firebase/config';
import {useNavigate,Link} from 'react-router-dom'
function Header() {
const {user}=useContext(authContext)
const navigate=useNavigate()
function logOut(){
 auth.signOut().then(()=>{
  navigate("/login")
 })
}
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>navigate("/")}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? user.displayName :<Link to="/login">Login</Link> }</span>
          <hr />
      
        </div>
      { user && <span onClick={logOut}> Logout</span> }

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              navigate("/create")
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
