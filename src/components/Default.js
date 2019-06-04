import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h4>404 Error Page Not Found</h4>
            <h5>
              The URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              you are trying to access was not found{" "}
            </h5>
            <Link to="/">
              <button className="btn-main-secondary px-3 py-2 mt-4">
                Back to Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
