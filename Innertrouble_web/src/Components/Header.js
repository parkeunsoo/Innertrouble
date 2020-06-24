import React from 'react';
import '../CSS/header.css'
import logo from '../Images/inner_logo3.png'
import BarButton from './Barbutton';
import { menuStatus,userStatus } from '../actions'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Header extends React.Component{
    state={
        login:null
    }
    _logout = () =>{
        this.props.userStatus(null)
        window.location.href = '/home';
    }
    render(){
        if(this.props.user == null){
            return (
                <div className="header">
                    <img id="logo" src={logo} alt=""></img><div id ="signbutton"><BarButton onClick = {()=>{this.props.menuStatus(null)}} value ="SIGN:IN" link='/login'></BarButton></div>
                </div>
            )}
        else{
            return(
            <div className="header">
                    <Link id="myinfo" to="/Myinfo" onClick = {()=>{this.props.menuStatus(null)}}>{this.props.user.id}</Link><img id="logo" src={logo} alt=""></img><div id ="signbutton"><BarButton onClick = {this._logout} value ="LOG:OUT" link='/'></BarButton></div>
                </div>
        )}
    } 
}
const mapStateToProps = state => ({
    selected: state.status.menu,
    user: state.status.user
  });
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    menuStatus: menu => dispatch(menuStatus(menu)),
    userStatus: user => dispatch(userStatus(user))
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)