import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (

      <div class="logo-navbar">
        <div class="logo">
          <a href="index.html">
            <div class="imglogo">
              <img alt="" src="assets/images/slice_pizza.png" class="s1imgimage" />
            </div>
            <div class="txtlogo">
              <div class="txt1"><span class="c1">PI</span><span class="c2">Z</span>ZA</div>
              <div class="txt2">PIZZA Restaurant</div>
            </div>
          </a>
        </div>

        <nav class="navbar navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Hours</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }

}
