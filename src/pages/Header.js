import React, { useState } from 'react'
import ReactPlayer  from "react-player";
import logo from '../Image/play-button.svg';
import MuteIcon from '../Image/mute.svg'
import UnmuteIcon from '../Image/unmute.svg'
import add from '../Image/add.svg'


function Header(){
    const [muted,setIsMuted] = useState(true);
return (
    <div className="header" >
        <ReactPlayer
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            volume={1}
            muted={muted}
            className='header__video'
            url='https://vimeo.com/273454464'
            />
        <button
        onClick={() => alert('not a movie!')}
        className='header__container-btnPlay'
      >
        <img src={logo} className="App-logo" alt="logo" />
        Play
      </button>
      <button className='header__container-btnMyList'>
      <img src={add} className="App-logo" alt="logo" />
        My List
      </button>
      <div className='header__container--fadeBottom'></div>
      
      {muted ? (
        <div
          onClick={() => setIsMuted(false)}
          className='header__container-btnVolume'
        ><img src={MuteIcon} /></div>
      ) : (
        <div
          onClick={() => setIsMuted(true)}
          className='header__container-btnVolume'
        ><img src={UnmuteIcon} /></div>
      )}
    </div>
);
}

export default Header;