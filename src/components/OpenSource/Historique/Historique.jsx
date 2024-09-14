import React from 'react';

const Historique = () => {
  return (
    <section id='historique' className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Historique of Open Source Versions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Version 11</h3>
          <p>Released in 2021 with groundbreaking updates on APIs and modularity.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Version 12</h3>
          <p>Released in 2022, introducing seamless integration with cloud services.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Version 13</h3>
          <p>The current version that focuses on performance and augmented reality support.</p>
        </div>
      </div>
    </section>
  );
}

export default Historique;
