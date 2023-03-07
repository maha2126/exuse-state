/* import { useState, useEffect } from "react";


//useState
//useEffect

function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("ready...");
  },[])
  return(
    <div>
      <h1>Welcome To React</h1>
      <h3>Current - {count}</h3>
      <button onClick={()=> setCount(count+1)}>up</button>
    </div>
  )
}
export default App; */


/* import { useEffect, useState } from "react";

function App(){
  const [count, setCount] = useState(0)
  const [deg,setDeg] = useState(0)

  useEffect(() => {
    console.log("worked...");
  }, [count,deg])

  return(
    <div>
      <h2>Current - {count}</h2>
      <h2>Current - {deg}</h2>
      <button onClick={() => setCount(count+1)}>change first</button>
      <button onClick={() => setDeg(deg+10)}>change second</button>
    </div>
  )
}

export default App; */


import './App.css';
import Playlist from './Playlist';
import Song from './Song';

function App(){
  return (
    <div className='App'>

    <Playlist>
      <Song
        title = "I have Nothing"
        singer = "Linkin Park"
        duration = "3"
      />
      <Song
        title = "I have Nothing"
        singer = "Linkin Park"
        duration = "4.2"
      />
      <Song
        title = "I have Nothing"
        singer = "Linkin Park"
        duration = "4"
      />
    </Playlist>
    </div>
  )
}

export default App