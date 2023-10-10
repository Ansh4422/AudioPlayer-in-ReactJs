import React, { useState } from 'react'
import "./Songs.css"
import { SongList } from './SongList'
import ReactAudioPlayer from 'react-audio-player'
import Back from "../Back/Back"


const Songs = () => {

  const [Song, setSong] = useState({
    name:"No Song Selected", movie:"", link:""
  });

  return (
   <>
   <Back/>
    <div className="header_song">
        <h2>SONGS</h2>
        <br/>
        <p>--A list of Songs some of your type and some which you may like...--</p>
    </div>

    <div className="tag">
    <p className="circle"></p>
    <marquee behavior="scroll" direction="">
      <h4>Fiza's Favourite</h4>
      </marquee>
      <p className="circle"></p>
    </div>


<br />

    <div className="song_list">
    {SongList.map((item, key) =>
        
         <button className='song' onClick={()=> setSong({...Song, name:(item.name), movie:(item.movie), link:(item.link)})}> <img src='/Songs/logo.png' width="40px" /> <h3>{item.name} - {item.movie}</h3></button>
    )}
    </div>
      
      <div className="spacing"></div>
     


     <div className="player">
     <h3>-- {Song.name} / {Song.movie} --</h3>
      <ReactAudioPlayer id='audio_player' src={Song.link} autoPlay controls />
     </div>




   </>
  )
}

export default Songs