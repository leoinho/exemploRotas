import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pagina2 from './Pagina2';
import Home from './Home';


class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/pagina2" component={Pagina2} />
       
      </div>
    </Router>
  );
}
}
export default App;
