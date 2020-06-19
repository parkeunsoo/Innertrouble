import React from 'react'
import Youtubeapi,{ baseParams } from '../API/Youtubeapi'
import YouTube from 'react-youtube';
import '../CSS/videolist.css'
class Videolist extends React.Component{
    state = {
        items : null,
        loading : true 
    }
    
    componentDidMount(){
        Youtubeapi.get('/search',{
            params:{...baseParams
            }
        }).then((response)=>{
            this.setState(
                {
                    items : response.data.items.slice(1),
                    loading: false
                })
            }).catch((err)=>{
                console.log(err)
            
            })
    
            
    }
    render(){
        if(this.state.loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
        const opts = {
            height: '220',
            width: '350',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                origin:'http://localhost:3001'
            },}
        var videos = this.state.items.map((value)=><YouTube videoId={value.id.videoId} opts={opts}></YouTube>)
            return(
                <div className="videolistcontainer">
                    {videos}
                </div>)
                }
}
export default Videolist;