import React from 'react'
import Barbutton from '../Components/Barbutton'
import Loginapi from '../API/Loginapi'
import '../CSS/login.css'
import { useHistory } from "react-router-dom";
class Login extends React.Component{
    constructor(){
        super();
    }
    state={
        id : null,
        password : null
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
          console.log(this.state)
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
            if(data.message=="success"){
                alert(data.token)
                history.push("/home")
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
            if(data =="success"){
                alert("회원가입을 축하합니다.")
            }
            if(data =="fail"){
                alert("회원가입에 실패하셨습니다.")
            }
        });
    }
    render(){
      
        return(
            <div className="logincontainer">
                <div id="loginform">
                    <input id="input" type="id" name="id" placeholder="USER ID" value={this.state.id} onChange={this.handleChange}></input>
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
export default Login;