import React from 'react'
import Barbutton from '../Components/Barbutton'
import Loginapi from '../API/Loginapi'
import { menuStatus,userStatus } from '../actions'
import { connect } from 'react-redux';
import '../CSS/login.css'
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            id : null,
            password : null
        }

    }
    _goHome() {
        this.props.history.push("/");
      }
    handleChange = (e) => {
        if(e.target.name ==="id"){
            this.setState({
              id:e.target.value
            })
          }
        else{
            this.setState({
              password:e.target.value
            })
          }   
      }
    _Sign_in = () => {
        Loginapi.post('/signin',{ 
            user:{
                id:this.state.id,
                password:this.state.password
            },
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            }
        }).then(response=>response.data).then(data =>{
            console.log(data)
            if(data.message==="success"){
                alert(data.token)
                this._goHome()
                this.props.menuStatus('/')
                this.props.userStatus({
                    id:this.state.id,
                    token:data.token
                })
                }
            else{
                alert("로그인에 실패하셨습니다.")
            }
        });
    }
    
    _Sign_up = () => {
        Loginapi.post('/signup',{ 
            user:{
                id:this.state.id,
                password:this.state.password
            },
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            }
        }).then(response=>response.data).then(data =>{
            if(data ==="success"){
                alert("회원가입을 축하합니다.")
            }
            if(data ==="fail"){
                alert("회원가입에 실패하셨습니다.")
            }
        });
    }
    render(){
      
        return(
            <div className="logincontainer">
                <div id="loginform">
                    <input id="input" type="id" name="id" placeholder="USER ID" value={this.state.id || ''}  onChange={this.handleChange}></input>
                    <div></div>
                    <input id="input" type="password" name="password" placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange}></input>
                    <div id="space"></div>
                    <Barbutton onClick ={this._Sign_in} value="SIGN:IN" style={{height:'50px', width:'350px',border: '1px solid rgb(60, 120, 165)'}}></Barbutton>
                    <Barbutton onClick ={this._Sign_up} value="SIGN:UP" style={{height:'50px', width:'350px',border: '1px solid rgb(60, 120, 165)', marginTop:'5px'}}></Barbutton>
                </div>
            </div>
        )
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
  )(Login)