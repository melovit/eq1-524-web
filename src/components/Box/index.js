import React, { Component } from "react";

import "./styles.css";

export default class Box extends Component {
  render() {
    return (
      <div style={this.props.style} className={"col-7 right-side py-4"}>
        {this.props.children}
      </div>
    );
  }
}
