import './gameBody.css';
import { IUserTurn } from '../../App';

interface IPlayTurn{
    turn:IUserTurn
    playTurn:()=>void
}




function GameBody(props:IPlayTurn) {
    
  return (
    <div className="gameBody">
        <div className="grid">
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="box" onClick={props.playTurn}>{ props.turn.xTurn && <span className="material-symbols-outlined xBodySymbole">close</span>}{ props.turn.oTurn && <span className="material-symbols-outlined oBodySymbole">trip_origin</span>}</button>
        <button className="x">
            <div>
                <div>X</div>
                <div>14</div>
            </div>
        </button>
        <button className="ties">
            <div>
                <div>Ties</div>
                <div>14</div>
            </div>
        </button>
        <button className="o">
            <div>
                <div>O</div>
                <div>14</div>
            </div>
        </button>
        <button className="winner">
            WINS
        </button>
        </div>
    </div>
  );
}
export default GameBody;