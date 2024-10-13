import React from 'react';

const JOHackathon = () => {
  return (
    <section
      id='JOHackathon'
      className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl font-bold mb-8">Join Our Hackathon</h2>
      
      <form className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name input */}
        <input 
          type="text" 
          placeholder="First Name" 
          className="border-2 border-gray-300 bg-transparent rounded-lg p-3 text-lg"
        />
        
        {/* Last Name input */}
        <input 
          type="text" 
          placeholder="Last Name" 
          className="border-2 border-gray-300 bg-transparent rounded-lg p-3 text-lg"
        />
        
        {/* Email input */}
        <input 
          type="email" 
          placeholder="Email" 
          className="md:col-span-2 border-2 border-gray-300 bg-transparent rounded-lg p-3 text-lg"
        />

        {/* Phone input */}
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="md:col-span-2 border-2 border-gray-300 bg-transparent rounded-lg p-3 text-lg"
        />

        {/* City input */}
        <input 
          type="text" 
          placeholder="City" 
          className="border-2 border-gray-300 bg-transparent rounded-lg p-3 text-lg"
        />

        {/* Group name input */}
        <input 
          type="text" 
          placeholder="Group Name" 
          className="border-2 border-white bg-transparent rounded-lg p-3 text-lg"
        />
      </form>

      {/* Join Now button */}
      <button 
        className="mt-8 hover:bg-white text_white hover:text-gray-900 py-3 px-8 rounded-lg font-semibold bg-transparent border-2 transition"
      >
        Join Now
      </button>
    </section>
  );
};

export default JOHackathon;
