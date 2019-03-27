import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Pagina2 extends Component {
  render() {
    return (
      <div>
        <h1>Página 2!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Pagina2;
