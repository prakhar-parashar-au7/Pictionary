
import React from 'react';
import Play from './Components/play';
import Join from './Components/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/play" component={Play} />
    </Router>
  );
}

export default App;