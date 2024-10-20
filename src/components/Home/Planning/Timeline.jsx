import React, { useRef, useState, useEffect } from "react";
import "./Timeline.css"; // Vous pouvez utiliser ce fichier CSS pour styliser

const Timeline = ({ speedScroll , isActive , events}) => {
  const [items, setItems] = useState(events);

  const ref_T = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isMobile = window.innerWidth <= 768;

  //! Mouse drag events for timeline scrolling
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - ref_T.current.offsetLeft); // Calculate mouse position relative to the element
    setScrollLeft(ref_T.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - ref_T.current.offsetLeft;
    const walk = (x - startX) * speedScroll;
    ref_T.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  //! State for the dot position and current time
  const [dotPosition, setDotPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const distanceH = 30; // Width of each timeline item
  const Start_time = new Date();
  Start_time.setHours(items[0].depardH);
  Start_time.setMinutes(items[0].depardM);

  const updateDotPosition = (i) => {
    // Calculate the new dot position based on timeline items and time progression
    const newPosition = 197* i; // Increment based on index
    setDotPosition(newPosition);
  };

  useEffect(() => {
    let i = 0; // Local index to track current item
    const interval = setInterval(() => {
      if (i < items.length ) {
        const itemTime = new Date();
        itemTime.setHours(items[i].depardH);
        itemTime.setMinutes(items[i].depardM);

        // Check if current time is past the item's scheduled time
        if (currentTime >= itemTime) {
          
          // Stop if stp is true
          if (items[i].stp) {
            clearInterval(interval);
          }
          i++; // Move to the next item
        }
      }
      updateDotPosition(i);
    }, 1500);

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, [currentTime, items]);

  useEffect(() => {
    // Update current time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(timeInterval);
  }, []);
  

  return (
    <div className="timeline-container"
      ref={ref_T}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="timeline">
        <div
          className={`dot ${isActive ? 'active_dot' : 'disactive_dot'}`}
          style={{
            left: `${dotPosition}px`, // Move dot horizontally
          }}
        ></div>
        {items.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
            key={item.id}
          >
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
