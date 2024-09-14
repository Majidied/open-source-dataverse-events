import React from 'react';

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://mp.afrikayna.com/wp-content/uploads/2018/11/OCP-logo.jpg' },
  { name: 'Sponsor 2', logo: 'https://via.placeholder.com/150' },
  { name: 'Sponsor 3', logo: 'https://via.placeholder.com/150' },
  { name: 'Sponsor 4', logo: 'https://via.placeholder.com/150' },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <p className="text-lg mb-12 text-gray-700">
        We are proud to be supported by our incredible sponsors.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
