import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Formulaire from './formulaire';

function App() {
  const [backenData, setBackenData]= useState([])

  useEffect(()=>{
    fetch("/api")
    .then(res=>res.json())
    .then(data=>{
      setBackenData(data)
    })
  },[])


  return (
    <div className="App">
    
     {/* { 
      (typeof backenData.user === 'undefined' ) ?
         ( <p>Loading.....</p>):
         ( backenData.user.map((user,i) =>(
            <p key={i}>{user}</p>

          )))} */}
          <Formulaire/>
        
      
    </div>
  );
}

export default App;
