import React from 'react';

const Planning = () => {
  return (
    <section id="planning" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Planning</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Day 1</h3>
          <p>Introduction to Open Source v13</p>
        </div>
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Day 2</h3>
          <p>Workshops and Hands-on Labs</p>
        </div>
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Day 3</h3>
          <p>Keynote Talks & Closing Ceremony</p>
        </div>
      </div>
    </section>
  );
}

export default Planning;
