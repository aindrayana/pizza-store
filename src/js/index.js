import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";

export default class Index extends React.Component {
  render() {
    return (
      <Navbar />
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
