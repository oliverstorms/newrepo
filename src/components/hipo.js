import React, { Component } from 'react';
import Button from "./button.js"

class header extends Component {

  render() {
    return(
      <div className="headerContainer">
<img className="herografik" src="/assets/big.png"></img>
        <div className="pretitle">emmerys</div>
        <h1>Kærlighed til økologi og smag</h1>
        <div className="header__description">Emmerys er et 100% økologisk bageri. Håndlavet brød, kage og wienerbrød</div>
        <Button className="padding__top" color="btn__yellow" />

      </div>
    )
  }

}
export default header