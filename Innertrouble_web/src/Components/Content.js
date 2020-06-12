import React from 'react'
import '../CSS/content.css'
import Item from './Item'
function Content(list){
    const item = list.value.map((number)=><Item value={number[0]} link={number[1]}></Item>);
    return(
        <div className='content'>
            {item}
        </div>
    )
}
export default Content;

