import React from 'react'
import '../CSS/post.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { menuStatus } from '../actions'
class Post extends React.Component{
    state={
        menu:this.props.postnumber
    }
    componentDidMount(){

    }
    render(){
    
        return(
            <Link className='link' to={this.props.postnumber}>
            <div className="post">
            <img width="80%" height="60%" style={{marginBottom:'10px'}} src={process.env.PUBLIC_URL +this.state.menu+'_color.png'} alt="" ></img>
            <div>
                게시물 제목
                </div>
                <div>작성자 게시물번호:{this.props.postnumber}</div>
                좋아요 댓글
                
            </div>
            </Link>
        )}
}
const mapStateToProps = state => ({
    selected: state.status.menu
  });
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    menuStatus: menu => dispatch(menuStatus(menu)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)