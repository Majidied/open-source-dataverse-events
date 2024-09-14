import React from 'react';

const Team = () => {
  return (
    <section id='team' className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Alice Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Bob Smith</h3>
          <p>Project Manager</p>
        </div>
        <div className="shadow-lg p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Charlie Johnson</h3>
          <p>AR Specialist</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
