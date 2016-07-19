import React from "react";
import ReactDOM from "react-dom";

import '../assets/css/style.less';
import '../assets/css/responsive.less';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Header />
        <Menu />
      </div>
    );
  }
}


const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
