import React, { Component } from "react";

class button extends Component {
  render() {
    return (
      <div className="navbarouter">
        <div className="navbarinner">
          <img className="logo" src="/assets/emmerylogo.png"></img>
        <div className="navContainer">
          <div className="navItem">Forside</div>
          <div className="navItem">Menu</div>
          <div className="navItem">Find Butik</div>
          <div className="navItem">Job</div>
        </div>
        </div>

      </div>
    );
  }
}
export default button;
