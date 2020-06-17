import React from 'react';
import '../CSS/header.css'
import logo from '../Images/inner_logo3.png'
import BarButton from './Barbutton';
function Header() {
return (
    <div className="header">
        <img id="logo" src={logo}></img><div id ="signbutton"><BarButton value ="SIGN:IN" link='/login'></BarButton></div>
    </div>
)}
export default Header;