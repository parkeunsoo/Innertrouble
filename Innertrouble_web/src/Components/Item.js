import React from 'react'
import '../CSS/item.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { menuStatus } from '../actions'
class Item extends React.Component{
    state={
        menu:this.props.link
    }
    componentDidMount(){

    }
    render(){
        var bcolor = null
        if (this.state.menu==this.props.selected)//현재 메뉴 아이템과 Redux 스토어의 선택된 메뉴 아이템
             bcolor ='rgb(230,230,230)'
        return(
            <Link className='link' to={this.props.link} onClick={() => this.props.menuStatus(this.props.link)}>
            <div className="item" style={{backgroundColor:bcolor}}>
                <img></img>{this.props.value}
            </div>
            </Link>
        )
        }
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
  )(Item)