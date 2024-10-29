import React, { useState } from 'react';
import "./Header.css"

const Header = ( {handleClick_One , handleClick_Two , handleClick_Tree , status }) => {
  const statusClass = status === "left" 
    ? "class-left" 
    : status === "middle"  // Mettre "middle" en minuscules pour cohérence
      ? "class-middle" 
    : status === "right"
      ? "class-right"
    : ""; // Valeur par défaut si aucun status n'est trouvé

  return (
    <div className='MainContainer'>
        <h1>Planning</h1>
        <p>Join us for an engaging weekend filled with insights and collaboration at our exciting events !</p>
        <div className="B_C">
            <div className='ButtonsContainer'>
                <button onClick={handleClick_One} >25 Nov</button>
                <button onClick={handleClick_Two}>26 Nov</button>
                <button onClick={handleClick_Tree}>27 Nov</button>
                <span className={statusClass}></span>
                {/* Adding an underliner that switch between the buttons */}
            </div>
        </div>

    </div>
  );
}

export default Header;
