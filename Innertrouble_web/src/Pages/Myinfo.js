import React from 'react'
import Barbutton from '../Components/Barbutton'
import '../CSS/myinfo.css'
class Myinfo extends React.Component{

    render(){
        return(
            <div className="myinfocontainer">
                <Barbutton style ={{width:'120px' ,height:'30px'}}value ="WRITE:NEW" link='/write'></Barbutton>
            </div>
        
        )

    }

}
export default Myinfo;