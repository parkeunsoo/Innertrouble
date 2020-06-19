import React from 'react'
import '../CSS/inner.css'
import Postlist from '../Components/Postlist'
function Inner(){
return(
    <div className="icontainer">
        <div id="innerboard">
            <Postlist></Postlist>
        </div>
    </div>
)
}
export default Inner;