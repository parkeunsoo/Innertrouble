import React from 'react'
import Content from './Content'
import '../CSS/sidebar.css'
function Sidebar(){
    return(
        <div className='sidebar'>
            <div></div>
            <div id="title">Recent</div>
            <Content value={[["홈",'/'],["최근",'/recent'],["인기",'/hot']]}></Content>
            <div id="bline"></div>
            <div id="title">Youtube</div>
            <Content value={[["얼떨이들",'/friends'],["Valorant",'/valorant'],["일상",'/life'],["뚝딱 뚝딱",'/making']]}></Content>
            <div id="bline"></div>
            <div id="title">Favorite</div>
            <Content value={[["책",'/books'],["음악",'/musics'],["영상","/videos"]]}></Content>
            <div id="bline"></div>
            <div id="title">Trouble</div>
            <Content value={[["이너 트러블",'/inner'],["아웃 트러블",'/outter']]}></Content>
            <div id="bline"></div>
            <div id="title">Share</div>
            <Content value={[["경험",'/experience'],["정보",'/information'],["지식",'/knowledge']]}></Content>
            <div id="bline"></div>
            
        </div>
    )
}
export default Sidebar;