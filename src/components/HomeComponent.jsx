import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Click the button below to view log data for this applicaiton</p>
        <Link to="/logviewer">
          <button className="btn-action">Load</button>
        </Link>
      </div>
    );
  }
}

export default HomeComponent;
