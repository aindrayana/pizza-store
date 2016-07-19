import React from "react";
import firebase from "firebase";

export default class Index extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
