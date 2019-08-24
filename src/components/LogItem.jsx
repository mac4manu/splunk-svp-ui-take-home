import React, { Component } from "react";
import "../styles/logitem.css";

class LogItem extends Component {
  render() {
    const { key, classname, logPayload } = this.props;

    return (
      <section className={"log-wrapper " + classname} key={key}>
        <section className="log-wrapper-child">
          <div>
            <label>Timestamp</label>
            <div>{logPayload._time}</div>
          </div>
          <div class="log-raw-data">
            <label>Res code</label>
            <div style={{ wordBreak: "break-word" }}>{logPayload._raw}</div>
          </div>
          <div>
            <label>Host</label>
            <div>{logPayload.host}</div>
          </div>
        </section>
      </section>
    );
  }
}

export default LogItem;
