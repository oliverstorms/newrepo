import React, { Component } from "react";
import Hipo from "./hipo.js";
import Navbar from "./navbar.js";
import Slider from "./slider.js";

class header extends Component {
  render() {
    return (
      <div>
      <Navbar />

      <div className="header">
<div className="innerHeader">
        <div className="leftHeader">
          <Hipo />
        </div>

        <div className="rightHeader">
          <Slider />
        </div>
        </div>
      </div>
      </div>
    );
  }
}
export default header;
