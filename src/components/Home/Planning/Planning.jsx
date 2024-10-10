import React, { useState } from 'react';
import './Planning.css'; // Import the CSS file for styling

const Planning = () => {
  const [activeDay, setActiveDay] = useState(0);

  const eventDays = [
    {
      day: 'Day 1',
      activities: [
        { time: '08:30', description: 'Opening' },
        { time: '10:00', description: 'Coffee Break' },
        { time: '11:30', description: 'Workshop 1' },
        { time: '01:00', description: 'Lunch Break' },
        { time: '02:30', description: 'Workshop 2' },
        { time: '04:00', description: 'Panel Discussion' },
        { time: '05:30', description: 'Networking' },
        { time: '06:30', description: 'cloture' },

      ],
    },
    {
      day: 'Day 2',
      activities: [
        { time: '09:00', description: 'Opening Remarks' },
        { time: '11:00', description: 'Keynote Speech' },
        { time: '01:00', description: 'Lunch Break' },
        { time: '02:00', description: 'Hands-on Labs' },
        { time: '04:00', description: 'Q&A Session' },
        { time: '05:00', description: 'Wrap-up' },
      ],
    },
    {
      day: 'Day 3',
      activities: [
        { time: '08:30', description: 'Keynote Presentation' },
        { time: '10:30', description: 'Panel Discussion' },
        { time: '01:00', description: 'Closing Ceremony' },
      ],
    },
  ];

  const handleDayClick = (index) => {
    setActiveDay(index);
  };

  return (
    <section id="planning" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">Event Planning</h2>

      {/* Timeline Controls */}
      <div className="days-navigation mb-6">
        {eventDays.map((event, index) => (
          <button
            key={index}
            className={`day-button ${index === activeDay ? 'active' : ''}`}
            onClick={() => handleDayClick(index)}
          >
            {event.day}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="horizontal-line" />
        {eventDays.map((event, index) => (
          <div
            key={index}
            className={`timeline ${index === activeDay ? 'active' : 'hidden'}`}
          >
            <div className="timeline-items">
              {event.activities.map((activity, i) => (
                <div
                  key={i}
                  className="timeline-item"
                  style={{ left: `${(i + 1) * (100 / (event.activities.length + 1))}%` }} // Spacing items evenly
                >
                  <span className="time">{activity.time}</span>
                  <span className="description">{activity.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planning;
