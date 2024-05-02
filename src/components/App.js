
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[running, setRunning]= useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setRunning(running+1);

    },1000)
  })
  return (
    <div>
        
        You've been on this page for {running} seconds.
      
    </div>
  )
}

export default App
