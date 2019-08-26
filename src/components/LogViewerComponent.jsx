import React, { Component } from "react";
import logspayload from "../logs.json";
import "../styles/logger.css";
import LogItem from "./LogItem.jsx";
import { Link } from "react-router-dom";
import uuid from "uuid";

class LoggerViewerComponent extends Component {
  state = {
    logs: [],
    filter: ""
  };

  componentDidMount() {
    this.loadLogs();
  }

  loadLogs = () => {
    const results = logspayload.map(res => res.result);
    this.setState({ logs: results });
  };

  getClassName = res => {
    switch (res["line.data.status"]) {
      case "200":
        return "succes-log";
      case "400":
      case "500":
        return "error-log";
      default:
        return "";
    }
  };

  filterResult = res => {
    this.setState({ filter: res });
    if (res) {
      const filteredLogs = this.state.logs.filter(log => {
        return (
          log._time.includes(res) ||
          log._raw.includes(res) ||
          log.host.includes(log._time.includes(res))
        );
      });
      this.setState({ logs: filteredLogs });
    } else {
      this.loadLogs();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "left", margin: "1em" }}>
          <Link to="/home">
            <button className="btn-action">Home</button>
          </Link>
        </div>
        <input
          className="search-input"
          type="text"
          name="Search"
          placeholder="Search Logs"
          value={this.state.filter}
          onChange={evt => {
            this.filterResult(evt.target.value);
          }}
        />
        <button className="btn-action" onClick={this.loadLogs}>
          Reload Logs
        </button>
        {!this.state.logs.length ? (
          <div>
            <p>No logs found</p>
          </div>
        ) : (
          <div>
            <p>
              Logs for sample application (fetched via api call to logs.json)
            </p>
            {this.state.logs.map(res => (
              <LogItem
                key={uuid()}
                className={this.getClassName(res)}
                logPayload={res}
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default LoggerViewerComponent;
