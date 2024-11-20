import {useEffect, useState} from 'react';
import Header from './Header';
import Timeline from './Timeline';
import Counter from './counter';
import "./Planning.css"

const Planning = () => {
  const dayOne = [
    { id: 1, hour: "8h : 30 min", description: "Accueil des invités", stp: false, depardH: 8, depardM: 30 },
    { id: 2, hour: "9h : 00 min", description: "Mots d’ouverture", stp: false, depardH: 9, depardM: 0 },
    { id: 3, hour: "9h : 55 min", description: "Conférence: Mr. Ezz Hatab", stp: false, depardH: 9, depardM: 55 },
    { id: 4, hour: "10h : 45 min", description: "Lancement de compétition", stp: false, depardH: 10, depardM: 45 },
    { id: 5, hour: "11h : 00 min", description: "Pause café", stp: false, depardH: 11, depardM: 0 },
    { id: 6, hour: "11h : 20 min", description: "Conférence: Mr. Youssfi Mohamed", stp: false, depardH: 11, depardM: 20 },
    { id: 7, hour: "12h : 10 min", description: "Présentation des entreprises", stp: false, depardH: 12, depardM: 10 },
    { id: 8, hour: "12h : 35 min", description: "Lancement du forum", stp: false, depardH: 12, depardM: 35 },
    { id: 9, hour: "13h : 15 min", description: "Pause déjeuner", stp: false, depardH: 13, depardM: 15 },
    { id: 10, hour: "14h : 30 min", description: "Conférence: Mr. Mtouaa Mourad", stp: false, depardH: 14, depardM: 30 },
    { id: 11, hour: "15h : 20 min", description: "Coaching: Mr. Bourial Youness", stp: false, depardH: 15, depardM: 20 },
    { id: 12, hour: "16h : 15 min", description: "Pause café", stp: false, depardH: 16, depardM: 15 },
    { id: 13, hour: "16h : 35 min", description: "Table ronde sur IA et DevOps", stp: false, depardH: 16, depardM: 35 },
    { id: 14, hour: "18h : 05 min", description: "Pause divertissement", stp: false, depardH: 18, depardM: 5 },
    { id: 15, hour: "18h : 40 min", description: "Clôture du 1er jour", stp: false, depardH: 18, depardM: 40 },
  ];

  const dayTwo = [
    { id: 1, hour: "8h : 30 min", description: "Accueil des invités", stp: false, depardH: 8, depardM: 30 },
    { id: 2, hour: "9h : 05 min", description: "Conférence: Mr. El Youssefi Abdelhakim", stp: false, depardH: 9, depardM: 5 },
    { id: 3, hour: "9h : 55 min", description: "Présentation des entreprises", stp: false, depardH: 9, depardM: 55 },
    { id: 4, hour: "10h : 20 min", description: "Pause-café", stp: false, depardH: 10, depardM: 20 },
    { id: 5, hour: "10h : 40 min", description: "Conférence: Mr. Hadria Badr", stp: false, depardH: 10, depardM: 40 },
    { id: 6, hour: "11h : 30 min", description: "Table Career experience", stp: false, depardH: 11, depardM: 30 },
    { id: 7, hour: "12h : 45 min", description: "Pause déjeuner", stp: false, depardH: 12, depardM: 45 },
    { id: 8, hour: "14h : 20 min", description: "Conférence: Mr. Omar Masoodi", stp: false, depardH: 14, depardM: 20 },
    { id: 9, hour: "15h : 10 min", description: "Pause divertissement", stp: false, depardH: 15, depardM: 10 },
    { id: 10, hour: "15h : 40 min", description: "Moroccan Microsoft Community", stp: false, depardH: 15, depardM: 40 },
    { id: 11, hour: "16h : 25 min", description: "Pause-café", stp: false, depardH: 16, depardM: 25 },
    { id: 12, hour: "16h : 45 min", description: "Présentation de la compétition", stp: false, depardH: 16, depardM: 45 },
    { id: 13, hour: "17h : 50 min", description: "Pause divertissement", stp: false, depardH: 17, depardM: 50 },
    { id: 14, hour: "18h : 15 min", description: "Clôture et remise des prix", stp: false, depardH: 18, depardM: 15 },
  ];
  
  


  //! handling timelines s state
  const [timelineState , settimlineState] = useState([true , false , false]);
  const [statusClass , setstatusClass] = useState("left")
  const handleClick_One =() => {
    settimlineState([true , false , false])
    setstatusClass("left")
  }

  const handleClick_Two =() => {
    settimlineState([false , true , false])
    setstatusClass("middle")
  }

  const handleClick_Tree =() => {
    settimlineState([false , false , true])
    setstatusClass("right")
  }

  //!  gerer  l etat du timline selon le jour 

  const [timelin_day ,setTimeline_day]  = useState([true , true , true , true])
  
  const handleDayEvent = ()=>{
    // mercredi = 3 
    // jeudi = 4
    // vendredi = 5
    const currentTime = new Date();
    const currentDay = currentTime.getDay()

    switch (currentDay) {
      case 3:
        setTimeline_day([true , false , false ])
        settimlineState([true , false , false])
        setstatusClass("left")
        break;
      case 4:
        setTimeline_day([false , true , false ])
        settimlineState([false , true, false])
        setstatusClass("middle")
        break;
      case 5:
        setTimeline_day([false , false , true ])
        settimlineState([false , false , true])
        setstatusClass("right")
        break;
      default:
        setTimeline_day([false , false , false ])
        break;
    }

    
  }

  useEffect(handleDayEvent,[])

  return (
    <section id="planning" style={{
      height:"100%",
      marginBottom:"30px",
    }} className='bg-transparent'>
      <Header handleClick_One={handleClick_One} handleClick_Two={handleClick_Two}  handleClick_Tree={handleClick_Tree } status={statusClass} ></Header>
      <div className="timelineCo" style={{height:"300px" , position:"relative" ,overflow: 'hidden', marginTop:"30px ", }}>

       <div style={{height:"300px"  , marginTop:"30px"  }} id = "T" className={timelineState[0] ? "Active_One" : "disactive_One"}>
          <Timeline speedScroll={3} events={dayOne}  isActive={timelin_day[0]}/>
       </div>

       <div style={{height:"300px"  , marginTop:"30px" }}  className={timelineState[1] ? "Active_Two" : "disactive_Two"}  >
          <Timeline speedScroll={3} events={dayTwo}  isActive={timelin_day[1]}/>
       </div>

       {/* <div style={{height:"300px"  , marginTop:"30px" }}  className={timelineState[2] ? "Active_Tree" : "disactive_Tree"} >
          <Timeline speedScroll={3} events={dayOne}  isActive={timelin_day[2]}/>
      </div> */}

      
      </div>    
    </section>
  );
}

export default Planning;


