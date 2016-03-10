import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  render() {
    return (
        <div>
          <h1>IT WORKS!!!</h1>
        </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
