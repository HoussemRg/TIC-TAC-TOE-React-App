import React, { useEffect, useState } from 'react';
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
  const [playerTurn,setPlayerTurn]=useState<boolean>(false);
  const [results,setResults]=useState<IResults>({xWinner:0,ties:0,oWinner:0});
  const [winner,setWinner]=useState<string>("");
  const [winnerDeclared,setWinnerDeclared]=useState<boolean>(false);
  const [start,setStart]=useState(false);
  const playTurn=(id:number):void=>{
    const newArray:IUserTurn[]=turn.map((button:IUserTurn)=>{
      if(button.buttonId===id){
        setPlayerTurn(!playerTurn);
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
  useEffect(()=>{
    const winningCombinations = [
      [1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9],  
      [1, 4, 7], 
      [2, 5, 8], 
      [3, 6, 9], 
      [1, 5, 9], 
      [3, 5, 7], 
    ];
    let newXwinner:number=results.xWinner;
    let newOwinner:number=results.oWinner;
    let newTie:number=results.ties;
    winningCombinations.forEach((comb)=>{
      if(comb.every((num)=> clicks.xClicks.includes(num))){
        newXwinner++;
        setWinner("X wins");
        setWinnerDeclared(true);
      }
      else if(comb.every((num)=> clicks.oClicks.includes(num))){
        newOwinner++;
        setWinner("O wins");
        setWinnerDeclared(true);
      }
    })
    if(clicks.xClicks.length===5){
      newTie++;
      setWinner("Tie ");
      setWinnerDeclared(true);
    }
    setResults((prevResults) => ({
      ...prevResults,
      xWinner: newXwinner,
      oWinner: newOwinner,
      ties: newTie,
    }));
  },[clicks]);

useEffect(()=>{
  
  if(winnerDeclared){
    setTurn(arrayOfButtons);
    
    setWinnerDeclared(false);
    setPlayerTurn(false);
  }
},[winnerDeclared]);
const startGame=():void=>{
  setStart(true);
} 
const restartGame=():void=>{
  setTurn(arrayOfButtons);
  setWinnerDeclared(false);
  setPlayerTurn(false);
  setResults({xWinner:0,ties:0,oWinner:0});
  setWinner("");
}
  return (
    
    <div className="App">
      <Header playerTurn={playerTurn} restartGame={restartGame} start={start} startGame={startGame} />
      {start &&
      <>
      <GameBody turn={turn} playTurn={playTurn} results={results} />
      <div className="footer-grid">
        <div className="results">
          <div className="x">
                <div><span className="material-symbols-outlined ">close</span></div>
                <div>{results.xWinner}</div>
            </div>
            <div className="ties">
                <div className='tie'>Ties</div>
                <div>{results.ties}</div>    
            </div>
            <div className="o">
                <div><span className="material-symbols-outlined">trip_origin</span></div>
                <div>{results.oWinner}</div>    
            </div>
            <div className="winner">
              {winner}
            </div>
        </div>
      </div>
      </>
      }
    </div>
      
    
  );
}
export default App;

