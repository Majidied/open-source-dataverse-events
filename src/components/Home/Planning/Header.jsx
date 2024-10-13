import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='MainContainer'>
        <h1>Planning</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem at similique, modi eaque beatae?</p>
        <div className="B_C">
            <div className='ButtonsContainer'>
                <button>25 Nov</button>
                <button>26 Nov</button>
                <button>27 Nov</button>
                {/* Adding an underliner that switch between the buttons */}
            </div>
        </div>

    </div>
  );
}

export default Header;
