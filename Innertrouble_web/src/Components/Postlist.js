import React from 'react'
import Dataapi from '../API/Dataapi'
import Post from './Post'
import '../CSS/postlist.css'
class Postlist extends React.Component{
    state = {
        items : null,
        loading : false,
        data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"]
    }
    
    // componentDidMount(){
    //     Youtubeapi.get('/post',{
    //         body:{

    //         }
    //     }).then((response)=>{
    //         this.setState(
    //             {
    //                 items : response.data.items.slice(1),
    //                 loading: false
    //             })
    //         }).catch((err)=>{
    //             console.log(err)
            
    //         })
    
            
    // }
    render(){
        if(this.state.loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
     
        var posts = this.state.data.map((value)=><Post postnumber={value}></Post>)
            return(
                <div className="postlistcontainer">
                    {posts}
                </div>)
                }
}
export default Postlist;