import React from 'react'
import '../CSS/item.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function Item (text){
    return(
        <Link id className='link' to={text.link}>
        <div className="item">
               {text.value}
        </div>
        </Link>
    )
}
export default Item;