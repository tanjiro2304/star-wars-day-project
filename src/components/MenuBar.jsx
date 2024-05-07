import React from 'react'
import '../components/MenuBar.css'
import logo from '../assets/Star_Wars_Logo..png';
const MenuBar = () => {


  return (
    <div className='menu-bar'>
        <img className='star-wars-logo' src={logo} width="11%" height="110%"/>
    </div>
  )
}

export default MenuBar;