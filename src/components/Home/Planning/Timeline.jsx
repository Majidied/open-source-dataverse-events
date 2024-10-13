import React, { useRef, useState } from "react";
import "./Timeline.css"; // Vous pouvez utiliser ce fichier CSS pour styliser

const Timeline = ({speedScroll }) => {
  const [items, setItems] = useState([
    { id: 1, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 2, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 3, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 4, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 5, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 6, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 7, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 5, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 6, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 7, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 5, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    { id: 6, hour: "8h : 10 min" , description :"Une certain chose a ecrire helllo je sui ici car je veut"},
    { id: 7, hour: "8h : 10 min" , description :"Une certain chose a ecrire"},
    
  ]);

  const ref_T = useRef(null)
  const [isMouseDown , setIsMouseDown] = useState(false)
  const [startX, setStartX,] = useState(0)
  const [scrollLeft ,setScrollLeft] = useState(0)

  //! les Fonctions des evenement 

  const handleMouseDown = (e)=>{
    setIsMouseDown(true)
    setStartX(e.pageX - ref_T.current.offsetLeft) //* calculer la position du souris par rapport au element
    setScrollLeft(ref_T.current.scrollLeft)
    console.log(scrollLeft)
  
  }

  const handleMouseLeave = ()=>{
    setIsMouseDown(false)
  }

  const handleMouseMove = (e)=>{
   if(!isMouseDown) return ;
   e.preventDefault()
  
   const x = e.pageX - ref_T.current.offsetLeft;
   const walk = (x - startX) * speedScroll ;
  
   ref_T.current.scrollLeft = scrollLeft-walk
   console.log(ref_T.current.scrollLeft)
  }

  const handleMouseUp = ()=>{
    setIsMouseDown(false)
  }
  // Fonction pour ajouter un nouvel élément à la timeline
  const addItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, hour: `Item ${newId}` }]);
  };

  



  return (
    <div className="timeline-container" ref = {ref_T}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    >
      <div className="timeline">
      <div className="dot"   ></div>
      {items.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
            key={item.id}>
                <div className="Timeline-content">
                    <div className="connector"></div>
                    <div className="label">
                        <h1>{item.hour}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Timeline;
