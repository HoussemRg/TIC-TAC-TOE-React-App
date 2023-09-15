import React from 'react';
import './header.css';

interface IHeader{
  playerTurn:boolean
  restartGame:()=>void 
  start:boolean
  startGame:()=>void
}

function Header(props:IHeader) {
  return (
      <div className='header'>
        <div className="icon">
            <span className="material-symbols-outlined xSymbole">close</span>
            <span className="material-symbols-outlined oSymbole">trip_origin</span>
        </div>
        <div className="turn">
            {props.start ? props.playerTurn ?<><span className="material-symbols-outlined oSymbole">trip_origin</span><div>Turn</div></> : <><span className="material-symbols-outlined xSymbole">close</span><div>Turn</div></>: <button onClick={props.startGame} className="start">Start Game</button>}
            
        </div>
        <div >
          {props.start && <button onClick={props.restartGame} className="reset"><span className="material-symbols-outlined refresh">refresh</span></button>}
        </div>
      </div>
  );
}
export default Header;