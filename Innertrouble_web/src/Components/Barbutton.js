import React from 'react';
import '../CSS/barbutton.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
class BarButton extends React.Component{
  render(){
    return (
      <div className="BarbuttonBlock" style={this.props.style} onClick={this.props.onClick}>
        <Link id="barbutton" to={this.props.link}><div id="barbuttontext">{this.props.value}</div></Link>
      </div>
    ); 
  }
}

export default BarButton;
