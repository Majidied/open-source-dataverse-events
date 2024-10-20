import React  , {useState} from 'react';
import Header from './Header';
import Timeline from './Timeline';
import "./Planning.css"

const Planning = () => {
  const dayOne = [
    { id: 1, hour: "8h : 30 min", description: "Une certain chose a ecrire", stp: false, depardH: 8, depardM: 30 },
    { id: 2, hour: "9h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 9, depardM: 20 },
    { id: 3, hour: "10h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 10, depardM: 20 },
    { id: 4, hour: "11h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 11, depardM: 20 },
    { id: 5, hour: "12h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 12, depardM: 20 },
    { id: 6, hour: "13h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 13, depardM: 20 },
    { id: 7, hour: "22h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 22, depardM: 20 },
    { id: 3, hour: "10h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 10, depardM: 20 },
    { id: 4, hour: "11h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 11, depardM: 20 },
    { id: 5, hour: "12h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 12, depardM: 20 },
    { id: 6, hour: "13h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 13, depardM: 20 },
    { id: 7, hour: "22h : 10 min", description: "Une certain chose a ecrire", stp: false, depardH: 22, depardM: 20 },
  ] 
  //! handling timelines s state
  const [timelineState , settimlineState] = useState([true , false , false]);
  const handleClick_One =() => {
    settimlineState([true , false , false])
  }

  const handleClick_Two =() => {
    settimlineState([false , true , false])
  }

  const handleClick_Tree =() => {
    settimlineState([false , false , true])
  }
 

  return (
    <section id="planning" style={{
      height:"100vh"
    }}>
      <Header handleClick_One={handleClick_One} handleClick_Two={handleClick_Two}  handleClick_Tree={handleClick_Tree} ></Header>
      <div className="timelineCo" style={{height:"300px" , position:"relative" ,overflow: 'hidden', marginTop:"30px"}}>

      <div style={{height:"300px"  , marginTop:"30px"  }} className={timelineState[0] ? "Active_One" : "disactive_One"}>
          <Timeline speedScroll={3} events={dayOne}  isActive={true}/>
      </div>

      <div style={{height:"300px"  , marginTop:"30px"  }}  className={timelineState[1] ? "Active_Two" : "disactive_Two"}  >
          <Timeline speedScroll={3} events={dayOne}  isActive={true}/>
      </div>

      <div style={{height:"300px"  , marginTop:"30px"  }}  className={timelineState[2] ? "Active_Tree" : "disactive_Tree"} >
          <Timeline speedScroll={3} events={dayOne}  isActive={true}/>
      </div>
        
        
      </div>

      
    </section>
  );
}

export default Planning;


