import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { request } from 'graphql-request';
import Recipecard from "./recipecard.js"


  function Recipeblock(props) {


  const [opskrifter, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { opskrifter } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckk76g6e82tx001xxdzebamy1/master',
        `
        {
          opskrifter{
            titel
            beskrivelse
          }
        }                
    `
      );

      setProducts(opskrifter);
      console.log(opskrifter)
    };

    fetchProducts();
  }, []);

  if (!opskrifter) {
    return "Loading...";
  }
    
    return(
      <div className="recipeContainer">
      {opskrifter.map(home => <div><Recipecard title={home.titel} desc={home.beskrivelse}/></div>)}
      </div>
    );
 

}
export default Recipeblock