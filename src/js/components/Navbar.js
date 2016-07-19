import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const AdminClass = location.pathname.match(/^\/admin/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";


    return (

      <div class="logo-navbar">

        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="navbar-header">
            <div class="logo">
              <a href="#">
                <div class="imglogo">
                  <img alt="" src="assets/images/slice_pizza.png" class="s1imgimage" />
                </div>
                <div class="txtlogo">
                  <div class="txt1"><span class="c1">PI</span><span class="c2">Z</span>ZA</div>
                  <div class="txt2">PIZZA Restaurant</div>
                </div>
              </a>
            </div>

            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>



          <div class={"navbar-collapse " + navClass} id="hidden-nav">
            <ul class="nav navbar-nav navbar-right">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={AdminClass}>
                <Link to="/admin" onClick={this.toggleCollapse.bind(this)}>Admin</Link>
              </li>
            </ul>
          </div>



        </nav>


      </div>

    );
  }
}
