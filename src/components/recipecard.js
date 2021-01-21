import React, { Component } from 'react';


  function Recipecard(props) {
    
    return(
      <div className="recipeCard">
 <div className="cardTitle">{props.title}</div>
 <div className="cardDescription">{props.desc}</div>

      </div>
    );
 

}
export default Recipecard