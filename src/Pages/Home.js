import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
          <h1>Home</h1>
        <Link to="/pagina2"><h2>Pagina2</h2></Link>
      </div>
    );
  }
}

export default Home;
