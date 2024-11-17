import React from 'react';
import Countdown from 'react-countdown';

// Date cible
const targetDate = new Date('2024-12-31T00:00:00');

// Renderer personnalisé pour afficher le temps restant en jours, heures, minutes, et secondes
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Si le compte à rebours est terminé, afficher un message ou exécuter une action
    return <span>Le compte à rebours est terminé !</span>;
  } else {
    // Afficher le temps restant
    return (
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold' }}>
        <div style={{ textAlign: 'center', margin: '0 10px' , height :"74px"  }}>
          <p style={{fontSize: '40px', fontWeight:"400"}}>{days} <span style = {{marginLeft:"10px"}}> : </span></p>
          <span>jours</span>
        </div>
        <div style={{ textAlign: 'center', margin: '0 10px' , height :"74px"   }}>
          <p style={{fontSize: '40px', fontWeight:"400"}}>{hours} <span style = {{marginLeft:"10px"}}> : </span>  </p>
          <span>heures</span>
        </div>
        <div style={{ textAlign: 'center', margin: '0 10px' , height :"74px"  }}>
          <p style={{fontSize: '40px', fontWeight:"400"}}>{minutes}<span style = {{marginLeft:"10px"}}> : </span></p>
          <span>minutes</span>
        </div>
        <div style={{ textAlign: 'center', margin: '0 10px' , height :"74px" }}>
          <p style={{fontSize: '40px', fontWeight:"400"}}>{seconds}</p>
          <span>secondes</span>
        </div>
      </div>
      
    );
  }
};

const Counter = () => (
  <div>
    <Countdown date={targetDate} renderer={renderer} />
  </div>
);

export default Counter;
