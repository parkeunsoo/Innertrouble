import React from 'react';
import '../CSS/home.css'
import Videolist from '../Pages/Videolist'
function Home() {
  return (
            <div className="hcontainer">
                <div id="videoboard">
                        <Videolist></Videolist>
                </div>
            </div>
  );
}


export default Home;
