import React from 'react';
import Header from './Components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Recent from './Pages/Recent'
import Hot from './Pages/Hot'
import Friends from './Pages/Friends'
import Valorant from './Pages/Valorant'
import Life from './Pages/Life'
import Making from './Pages/Making'
import Books from './Pages/Books'
import Musics from './Pages/Musics'
import Videos from './Pages/Videos'
import Inner from './Pages/Inner'
import Outter from './Pages/Outter'
import Experience from './Pages/Experience'
import Information from './Pages/Information'
import Knowledge from './Pages/Knowledge'
import Login from './Pages/Login'


import './App.css';

function App() {
  return (
    <Router>
        <Header></Header>    
            <div className="container">
                <Sidebar></Sidebar>
                <div id="board">
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/recent' component={Recent} />
                    <Route exact path='/hot' component={Hot} />
                    <Route exact path='/friends' component={Friends} />
                    <Route exact path='/valorant' component={Valorant} />
                    <Route exact path='/life' component={Life} />
                    <Route exact path='/making' component={Making} />
                    <Route exact path='/books' component={Books} />
                    <Route exact path='/musics' component={Musics} />
                    <Route exact path='/videos' component={Videos} />
                    <Route exact path='/inner' component={Inner} />
                    <Route exact path='/outter' component={Outter} />
                    <Route exact path='/experience' component={Experience} />
                    <Route exact path='/information' component={Information} />
                    <Route exact path='/knowledge' component={Knowledge} />
                    <Route exact path='/login' component={Login}/>
                </div>
            </div>
    </Router>
  );
}

export default App;
