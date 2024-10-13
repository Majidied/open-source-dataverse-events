import React from 'react';
import Header from './Header';
import Timeline from './Timeline';

const Planning = () => {
  return (
    <section id="planning" style={{
      height:"100vh"
    }}>
      <Header></Header>
      <div className="timelineCo" style={{height:"300px" , position:"relative" , marginTop:"30px"}}>
        <Timeline speedScroll={3}/>
      </div>

      
    </section>
  );
}

export default Planning;
