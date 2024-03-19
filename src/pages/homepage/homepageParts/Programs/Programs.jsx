import React from "react";
import "./program.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../homepage/rightArrow.png'


const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore Our</span>
        <span> Programs</span>
        <span className="stroke-text"> to shape you</span>
      </div>

    <div className="program-categories">
        {programsData.map((program) => (
            
            
            <div className="category">

                {program.image}
                    <span>  {program.heading}</span>
                    <span>  {program.details}</span>
                   
                   
                    <div className="join-now">   
                     <span>  Join now</span>
                     
                      <img alt="" src={RightArrow}/>
                      
                      
                      </div>

            </div>
        )
        )}


    </div>

    </div>
  );
};

export default Programs;
