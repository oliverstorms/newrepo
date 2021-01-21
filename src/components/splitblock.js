import React, { Component } from "react";
import Button from "./button.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { request } from 'graphql-request';



function Splitblock(props) {


  const [cardcontents, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { cardcontents } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckk76g6e82tx001xxdzebamy1/master',
        `
        {
          cardcontents {
            headline
            carddescription
            image {
              url
            }
            color
          }
        }        
    `
      );

      setProducts(cardcontents);
    };

    fetchProducts();
  }, []);

  if (!cardcontents) {
    return "Loading...";
  }



  return (
    <div>
      <div className={("split", cardcontents[0].color)}>
        <div className="splitInner">
          <div className="leftSplit" >
            <img className="split__image" src={cardcontents[0].image.url}></img>
          </div>
          <div className="rightSplit" >
            <div className="textbox">
              <h2 >{cardcontents[0].headline}</h2 >
              <p>{cardcontents[0].carddescription}</p>
              <Button color="btn__blue"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Splitblock;
