import React, { useEffect, useState,useCallback } from 'react';
import './App.css';
import GameBody from './Components/gameBody/gameBody';
import Header from "./Components/header/header";

export interface IUserTurn{
  xturn:boolean
  oturn:boolean
  buttonId:number
  isClicked:boolean
}
interface IPlayerClicks{
  xClicks:number[]
  oClicks:number[]
}
export interface IResults{
  xWinner:number
  oWinner:number
  ties:number
}
const arrayOfButtons:IUserTurn[] =[
  {
    xturn:false,
    oturn:false,
    buttonId:1,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:2,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:3,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:4,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:5,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:6,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:7,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:8,
    isClicked:false,
  },
  {
    xturn:false,
    oturn:false,
    buttonId:9,
    isClicked:false,
  }
];


function App() {
  const [turn,setTurn]=useState<IUserTurn[]>(arrayOfButtons);
  const [clicks,setClicks]=useState<IPlayerClicks>({xClicks:[],oClicks:[]});
  const [results,setResults]=useState<IResults>({xWinner:0,ties:0,oWinner:0})
  const playTurn=(id:number):void=>{
    const newArray:IUserTurn[]=turn.map((button:IUserTurn)=>{
      if(button.buttonId===id){
        return({
          buttonId:button.buttonId,
          isClicked:true,
          xturn:turn.filter((button)=>button.isClicked).length%2===0,
          oturn:turn.filter((button)=>button.isClicked).length%2!==0,
        });
      }else {
        return button; 
      }
      
  });
    const newXTurnsArray:number[]=newArray.filter((button)=>button.isClicked && button.xturn).map((button)=>{
      return(button.buttonId);
    });
    const newOTurnsArray:number[]=newArray.filter((button)=>button.isClicked && button.oturn).map((button)=>{
      return(button.buttonId);
    });
    const newClicks:IPlayerClicks={xClicks:newXTurnsArray,oClicks:newOTurnsArray};
    setTurn(newArray);
    setClicks(newClicks);
    
    
  }
  
  const declareWinner=():void=>{
    const winningCombinations = [
      [1, 2, 3], // Première ligne horizontale
      [4, 5, 6], // Deuxième ligne horizontale
      [7, 8, 9], // Troisième ligne horizontale
      [1, 4, 7], // Première ligne verticale
      [2, 5, 8], // Deuxième ligne verticale
      [3, 6, 9], // Troisième ligne verticale
      [1, 5, 9], // Diagonale de gauche à droite
      [3, 5, 7], // Diagonale de droite à gauche
    ];
    
    winningCombinations.forEach((comb)=>{
      if(comb.every((num)=> clicks.xClicks.includes(num))){
        const newXwinner=results.xWinner++;
        const oldTie=results.ties;
        const oldoWinner=results.oWinner
        setResults({xWinner:newXwinner,ties:oldTie,oWinner:oldoWinner});
        console.log(results);
      }
      else if(comb.every((num)=> clicks.oClicks.includes(num))){
        const newOwinner=results.oWinner++;
        const oldTie=results.ties;
        const oldXWinner=results.xWinner
        setResults({xWinner:oldXWinner,ties:oldTie,oWinner:newOwinner});
        console.log(results);
      }
    })
    if(clicks.xClicks.length===5){
      const newTie=results.ties++;
      setResults({xWinner:results.xWinner,ties:newTie,oWinner:results.oWinner});
      
    }
  }

  useEffect(()=>{
    declareWinner();
  },[clicks])
  
  
  return (
    
    <div className="App">
      <Header />
      <GameBody turn={turn} playTurn={playTurn} results={results} />
      <div className="footer-grid">
        <div className="results">
          <div className="x">
                <div>X</div>
                <div>{results.xWinner}</div>
            </div>
            <div className="ties">
                <div>Ties</div>
                <div>{results.ties}</div>    
            </div>
            <div className="o">
                <div>O</div>
                <div>{results.oWinner}</div>    
            </div>
            <div className="winner">
                WINS
            </div>
        </div>
      </div>
    </div>
      
    
  );
}
export default App;

