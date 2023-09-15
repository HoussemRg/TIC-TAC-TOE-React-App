import './gameBody.css';
import { IResults, IUserTurn } from '../../App';

interface IPlayTurn{
    turn:IUserTurn[]
    playTurn:(id:number)=>void
    results:IResults
    
}




function GameBody(props:IPlayTurn) {
   
    const handleClick=(id:number):void=>{
        props.playTurn(id);
    }
    
    
  return (
    <div className="gameBody">
        <div className="grid">
        <button className="box" onClick={()=>handleClick(1)} disabled={props.turn[0].isClicked}>{props.turn[0].isClicked  && props.turn[0].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[0].isClicked  && props.turn[0].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(2)} disabled={props.turn[1].isClicked}>{props.turn[1].isClicked  && props.turn[1].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[1].isClicked  && props.turn[1].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(3)} disabled={props.turn[2].isClicked}>{props.turn[2].isClicked  && props.turn[2].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[2].isClicked  && props.turn[2].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(4)} disabled={props.turn[3].isClicked}>{props.turn[3].isClicked  && props.turn[3].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[3].isClicked  && props.turn[3].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(5)} disabled={props.turn[4].isClicked}>{props.turn[4].isClicked  && props.turn[4].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[4].isClicked  && props.turn[4].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(6)} disabled={props.turn[5].isClicked}>{props.turn[5].isClicked  && props.turn[5].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[5].isClicked  && props.turn[5].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(7)} disabled={props.turn[6].isClicked}>{props.turn[6].isClicked  && props.turn[6].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[6].isClicked  && props.turn[6].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(8)} disabled={props.turn[7].isClicked}>{props.turn[7].isClicked  && props.turn[7].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[7].isClicked  && props.turn[7].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={()=>handleClick(9)} disabled={props.turn[8].isClicked}>{props.turn[8].isClicked  && props.turn[8].xturn && <span className="material-symbols-outlined xBodySymbole">close</span>} {props.turn[8].isClicked  && props.turn[8].oturn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        </div>
    </div>
  );
}
export default GameBody;