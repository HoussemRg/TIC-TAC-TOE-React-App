import React from 'react';
import './gameBody.css';


function GameBody() {
  return (
    <div className="gameBody">
        <div className="grid">
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
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