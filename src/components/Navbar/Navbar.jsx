import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src="src/assets/logoo.png" alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>App</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact</li>
        </ul>
        <div className="navbar-right">
            <img className='searchIcon' src="src/assets/searchIcon.png" alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img className='basket' src="src/assets/basket.png" alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>

      
    </div>
  )
}

export default Navbar
