import React from 'react'
import Barbutton from '../Components/Barbutton'
import '../CSS/myinfo.css'
class Write extends React.Component{

    render(){
        return(
            <div className="myinfocontainer">
                <Barbutton style ={{width:'120px' ,height:'30px'}}value ="POST:IT" link='/write'></Barbutton>
            </div>
        
        )

    }

}
export default Write;