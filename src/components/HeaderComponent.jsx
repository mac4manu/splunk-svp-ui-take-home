import React, { Component } from "react";
import "../styles/header.css";

class HeaderComponent extends Component {
  render() {
    return (
      <header className="slv-header">
        <h1 className="slv-title">Splunk Log Viewer</h1>
      </header>
    );
  }
}

export default HeaderComponent;
