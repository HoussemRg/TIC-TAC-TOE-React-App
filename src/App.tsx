import React, { useState } from 'react';
import './App.css';
import GameBody from './Components/gameBody/gameBody';
import Header from "./Components/header/header";

export interface IUserTurn{
  xTurn:boolean
  oTurn:boolean
 
}

function App() {
  const [turn,setTurn]=useState<IUserTurn>({xTurn:true,oTurn:false});
  const playTurn=():void=>{
    const newTurn:IUserTurn={
      xTurn:false,
      oTurn:true,
    }
    setTurn(newTurn);
  }
  return (
    
    <div className="App">
      <Header />
      <GameBody turn={turn} playTurn={playTurn} />
      
      
    </div>
  );
}
export default App;

