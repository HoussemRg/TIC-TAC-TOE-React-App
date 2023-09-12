import React from 'react';
import './header.css';

function Header() {
  return (
      <div className='header'>
        <div className="icon">
            <span className="material-symbols-outlined xSymbole">close</span>
            <span className="material-symbols-outlined oSymbole">trip_origin</span>
        </div>
        <div className="turn">
            <span className="material-symbols-outlined xSymboleTurn">close</span>
            <div>Turn</div>
        </div>
        <div className="reset">
        <span className="material-symbols-outlined refresh">refresh</span>
        </div>
      </div>
  );
}
export default Header;