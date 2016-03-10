import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
