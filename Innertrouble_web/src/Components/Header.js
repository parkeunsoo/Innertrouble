import React from 'react';
import '../CSS/header.css'
import logo from '../Images/inner_logo3.png'
function Header() {
return (
    <div className="header">
        <img id="logo" src={logo}></img>
    </div>
)}
export default Header;